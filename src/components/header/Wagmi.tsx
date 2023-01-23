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
import { CopyHelper } from "src/components/core"

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
        address: address,
        chainId: chain?.id,
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
    let [balance, setBalance] = useState<any>("")

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
        <div className="z-0 lg:-mt-6">
            <Menu
                as="div"
                className="relative flex items-start rounded-md bg-white text-left dark:bg-black/5"
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
                            <Menu.Items className="absolute right-0 top-12 w-40 rounded-md bg-white ring-2 ring-gray-300  dark:bg-primary-dark">
                                <div className="">
                                    <Menu.Item>
                                        <div className="group w-full cursor-default items-center px-4 py-2 text-sm dark:text-white">
                                            <p className="truncate">{ensNameData && ensNameData}</p>
                                            <p>
                                                {balance} {data?.symbol}
                                            </p>
                                        </div>
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <div>
                                                {switchNetwork &&
                                                    chains.map((x) =>
                                                        x.id === chain?.id ? null : (
                                                            <button
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900 dark:bg-white/5 dark:text-pink-100"
                                                                        : "text-gray-700 ",
                                                                    "group flex w-full items-center space-x-4 px-4 py-2 text-sm dark:text-white",
                                                                )}
                                                                key={x.id}
                                                                onClick={() => switchNetwork(x.id)}
                                                            >
                                                                Switch to {x.name}
                                                                {isLoading &&
                                                                    x.id === pendingChainId &&
                                                                    " (switching)"}
                                                            </button>
                                                        ),
                                                    )}
                                            </div>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900 dark:bg-white/5 dark:text-pink-100"
                                                        : "text-gray-700 ",
                                                    "group flex w-full items-center space-x-2 px-4 py-2 text-sm dark:text-white",
                                                )}
                                            >
                                                <p>Copy Address</p>
                                                <CopyHelper toCopy={address.toString()} />
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={() => sendTransaction?.()}
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900 dark:bg-white/5 dark:text-pink-100"
                                                        : "text-gray-700 disabled:cursor-not-allowed disabled:hover:bg-gray-100 dark:disabled:hover:bg-white/5",
                                                    "group flex w-full items-center space-x-4  px-4 py-2 text-sm dark:text-white",
                                                )}
                                                disabled={
                                                    chain?.name != "Goerli" ||
                                                    isLoading ||
                                                    !sendTransaction ||
                                                    !sendTo ||
                                                    !amount
                                                }
                                            >
                                                {isLoading ? (
                                                    "Sending..."
                                                ) : (
                                                    <div className="bg-bkg flex space-x-1 text-center font-medium">
                                                        Send (.001 ETH)
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
                                                    "group flex w-full items-center space-x-4 rounded-b-md px-4 py-2 text-sm dark:text-white",
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
