/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useEffect, useState } from "react"
import { Menu, Transition } from "@headlessui/react"
import { useIsMounted } from "src/lib/hooks"
import {
    useAccount,
    useBalance,
    useConnect,
    useDisconnect,
    useEnsName,
    useNetwork,
    useSwitchNetwork,
} from "wagmi"
import Jazzicon, { jsNumberForAddress } from "react-jazzicon"
import { SendTransaction } from "src/components/sendTransaction"
import { truncateStr } from "src/lib/utils"
import { parseEther } from "ethers/lib/utils"
import { useDebounce } from "use-debounce"
import {
    useContractWrite,
    usePrepareContractWrite,
    usePrepareSendTransaction,
    useSendTransaction,
    useWaitForTransaction,
} from "wagmi"
import abi from "src/lib/abi/BuyMeACoffee.json"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

export default function Wagmi() {
    const { address }: any = useAccount()
    const { data: ensNameData } = useEnsName({ address: address, chainId: 1 })
    const isMounted = useIsMounted()
    const { connector, isConnected } = useAccount()
    const { connect, connectors, error, pendingConnector } = useConnect()
    const { disconnect } = useDisconnect()
    const { chain } = useNetwork()
    const { chains, pendingChainId, switchNetwork } = useSwitchNetwork()
    const { data, isError } = useBalance({
        addressOrName: address,
    })
    const sendTo = "0xBdBD49770aE869d06F688c0c1d62f175537aef63"
    const [debouncedTo] = useDebounce(sendTo, 500)
    const contractAddress = "0xB757B675294BF9873077815EcACE212e5623C771"
    const contractABI = abi.abi
    const { config: configData }: any = usePrepareContractWrite({
        address: contractAddress,
        abi: contractABI,
        functionName: "buyCoffee",
    })
    const contractWrite = useContractWrite(configData)
    const amount = "0.001"
    const [debouncedValue] = useDebounce(amount, 500)
    const { config } = usePrepareSendTransaction({
        request: {
            to: debouncedTo,
            value: debouncedValue ? parseEther(debouncedValue) : undefined,
        },
    })
    const { sendTransaction } = useSendTransaction(config)
    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: contractWrite.data?.hash,
    })
    const [balance, setBalance] = useState<any>("")

    useEffect(() => {
        if (!data) return
        const value = Number(data.formatted)
        const fixedValue = value.toFixed(3)
        setBalance(fixedValue)
    }, [data])

    if (isLoading) return <div>Fetching balance…</div>
    if (isError) return <div>Error fetching balance</div>
    if (!isMounted) return null

    return (
        <div className="z-0">
            <Menu
                as="div"
                className="relative z-50 inline-block rounded-lg bg-white text-left dark:bg-black/5"
            >
                <>
                    <Menu.Button as={React.Fragment}>
                        {!isConnected ? (
                            <button
                                className="group inline-flex  w-full cursor-pointer justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 ring-2 ring-gray-300 hover:bg-white  dark:bg-black/5 dark:text-gray-100 dark:hover:bg-primary-dark"
                                onClick={() => connect({ connector: connectors[0] })}
                            >
                                Connect
                                {isLoading &&
                                    connectors[0].id === pendingConnector?.id &&
                                    " (connecting)"}
                            </button>
                        ) : (
                            <button className="group inline-flex w-full cursor-pointer justify-center space-x-2 rounded-md px-2 py-2  text-sm font-medium text-gray-700 ring-2 ring-gray-300  hover:bg-white  dark:bg-primary-dark dark:text-gray-100 dark:hover:bg-primary-dark">
                                <Jazzicon diameter={20} seed={jsNumberForAddress(address)} />
                                <p>{ensNameData ?? truncateStr(address || "", 10)}</p>
                            </button>
                        )}
                    </Menu.Button>
                    {address && (
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-4 w-36 origin-top-right rounded-md bg-white ring-2 ring-gray-300  dark:bg-primary-dark">
                                <div className="">
                                    <Menu.Item>
                                        <div className="group flex w-full cursor-default items-center justify-end rounded-t-md px-4 py-2 text-center text-sm dark:text-white">
                                            <div className="">
                                                <p> {chain?.name ?? chain?.id}</p>

                                                {chain?.unsupported && " (unsupported)"}
                                            </div>

                                            {switchNetwork && (
                                                <div>
                                                    {chains.map((x) =>
                                                        x.id === chain?.id ? null : (
                                                            <button
                                                                key={x.id}
                                                                onClick={() => switchNetwork(x.id)}
                                                            >
                                                                {x.name}
                                                                {data?.symbol}
                                                                {isLoading &&
                                                                    x.id === pendingChainId &&
                                                                    " (switching)"}
                                                            </button>
                                                        )
                                                    )}
                                                </div>
                                            )}

                                            <div>{error && error.message}</div>
                                        </div>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <div className="group -mt-4 w-full cursor-default items-center justify-end space-x-4 rounded-b-md px-4 py-2 text-right text-sm dark:text-white">
                                            <div className="flex justify-end space-x-2">
                                                <p> {balance}</p>
                                                <p>{data?.symbol}</p>
                                            </div>
                                        </div>
                                    </Menu.Item>

                                    {/* <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900 dark:bg-white/5 dark:text-pink-100"
                                                        : "text-gray-700 ",
                                                    "group flex w-full items-center space-x-4 rounded-b-md border-t px-4 py-2 text-sm dark:text-white"
                                                )}
                                                onClick={() => disconnect()}
                                            >
                                                Copy Address
                                            </button>
                                        )}
                                    </Menu.Item> */}
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={() => sendTransaction?.()}
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900 dark:bg-white/5 dark:text-pink-100"
                                                        : "text-gray-700 ",
                                                    "group flex w-full items-center space-x-4 rounded-b-md px-4 py-2 text-sm dark:text-white"
                                                )}
                                                disabled={
                                                    isLoading ||
                                                    !sendTransaction ||
                                                    !sendTo ||
                                                    !amount
                                                }
                                            >
                                                {isLoading ? (
                                                    "Sending..."
                                                ) : (
                                                    <div className="flex space-x-1">
                                                        <p>Send</p>
                                                        <img
                                                            src="/coffee.jpg"
                                                            className="h-4 w-4 animate-wiggle"
                                                            alt=""
                                                        />
                                                        <p className=" text-[10px] font-medium">
                                                            .001 ETH
                                                        </p>
                                                    </div>
                                                )}
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900 dark:bg-white/5 dark:text-pink-100"
                                                        : "text-gray-700 ",
                                                    "group flex w-full items-center space-x-4 rounded-b-md px-4 py-2 text-sm dark:text-white"
                                                )}
                                                onClick={() => disconnect()}
                                            >
                                                Disconnect
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    )}
                </>
            </Menu>
        </div>
    )
}
