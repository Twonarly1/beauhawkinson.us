/* eslint-disable react-hooks/exhaustive-deps */
import abi from "../../../lib/abi/BuyMeACoffee.json"
import { ethers } from "ethers"
import Head from "next/head"
import React, { useEffect, useState, Fragment, useRef } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XCircleIcon } from "@heroicons/react/24/outline"

declare var window: any

function Coffee() {
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)
    // Contract Address & ABI
    const contractAddress = "0xB757B675294BF9873077815EcACE212e5623C771"
    const contractABI = abi.abi
    // Component state
    const [currentAccount, setCurrentAccount] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [memos, setMemos] = useState<any>([])

    const onNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setName(event.target.value)
    }

    const onMessageChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setMessage(event.target.value)
    }

    // Wallet connection logic
    const isWalletConnected = async () => {
        try {
            const { ethereum } = window

            const accounts = await ethereum.request({ method: "eth_accounts" })
            console.log("accounts: ", accounts)

            if (accounts.length > 0) {
                const account = accounts[0]
                console.log("wallet is connected! " + account)
            } else {
                console.log("make sure MetaMask is connected")
            }
        } catch (error) {
            console.log("error: ", error)
        }
    }

    const connectWallet = async () => {
        try {
            const { ethereum } = window

            if (!ethereum) {
                console.log("please install MetaMask")
            }

            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            })

            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error)
        }
    }

    const buyCoffee = async () => {
        try {
            const { ethereum } = window

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum, "any")
                const signer = provider.getSigner()
                const buyMeACoffee = new ethers.Contract(contractAddress, contractABI, signer)

                console.log("buying coffee..")
                const coffeeTxn = await buyMeACoffee.buyCoffee(
                    name ? name : "anon",
                    message ? message : "Enjoy your coffee!",
                    { value: ethers.utils.parseEther("0.001") }
                )

                await coffeeTxn.wait()

                console.log("mined ", coffeeTxn.hash)

                console.log("coffee purchased!")

                // Clear the form fields.
                setName("")
                setMessage("")
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(memos)

    // Function to fetch all memos stored on-chain.
    const getMemos = async () => {
        try {
            const { ethereum } = window
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum)
                // console.log("provider", provider)

                const signer = provider.getSigner()
                // console.log("signer", signer)

                const buyMeACoffee = new ethers.Contract(contractAddress, contractABI, signer)
                // console.log("buyMeACoffee", buyMeACoffee)

                console.log("fetching memos from the blockchain..")
                const memos = await buyMeACoffee.getMemos()
                console.log("fetched!")
                setMemos(memos)
            } else {
                console.log("Metamask is not connected")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        let ethereum: any
        let buyMeACoffee: ethers.Contract
        isWalletConnected()
        getMemos()

        // Create an event handler function for when someone sends
        // us a new memo.
        const onNewMemo = (from: any, timestamp: number, name: any, message: any) => {
            console.log("Memo received: ", from, timestamp, name, message)

            setMemos((prevState: any) => [
                ...prevState,
                {
                    address: from,
                    timestamp: new Date(timestamp * 1000),
                    message,
                    name,
                },
            ])
        }

        // Listen for new memo events.
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum, "any")
            const signer = provider.getSigner()
            buyMeACoffee = new ethers.Contract(contractAddress, contractABI, signer)

            buyMeACoffee.on("NewMemo", onNewMemo)
        }

        return () => {
            if (buyMeACoffee) {
                buyMeACoffee.off("NewMemo", onNewMemo)
            }
        }
    }, [])

    return (
        <div className="rounded-full p-2">
            <button
                disabled={open}
                className={`mt-6 w-full items-center rounded-lg bg-yellow-100 py-2 text-black hover:bg-yellow-200 ${
                    open && "cursor-not-allowed opacity-0"
                }`}
                onClick={() => setOpen(true)}
            >
                <b className="text-lg">Buy Me A Coffee!</b>
                <p className="-mt-1 text-xs">with Ethereum</p>
            </button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={() => setOpen(true)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-100 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 mx-auto flex w-full max-w-5xl flex-col space-y-5 overflow-y-auto p-5 pt-24  ">
                        <button
                            onClick={() => setOpen(false)}
                            className="mx-auto h-12 w-12 rounded-full hover:scale-105"
                        >
                            <XCircleIcon className=" cursor-pointer  text-white" />
                        </button>
                        {!currentAccount ? (
                            <div className="flex w-full items-end justify-center text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg bg-white  px-4 pt-5  pb-4 text-left shadow-xl transition-all  dark:bg-primary-dark sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                        <div className="w-full text-center">
                                            <Dialog.Title
                                                as="h3"
                                                className="justify-center text-lg text-gray-900 dark:text-gray-100"
                                            >
                                                Buy me a coffee!
                                            </Dialog.Title>
                                            <Dialog.Description>
                                                Switch to the Goerli Test Network!
                                            </Dialog.Description>
                                            <b>
                                                {currentAccount &&
                                                    currentAccount.slice(0, 6) +
                                                        "..." +
                                                        currentAccount.slice(
                                                            currentAccount.length - 6,
                                                            currentAccount.length
                                                        )}
                                            </b>
                                        </div>

                                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                            {!currentAccount && (
                                                <>
                                                    <button
                                                        type="button"
                                                        className="inline-flex w-full justify-center rounded-md  border bg-yellow-100 px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-yellow-200   sm:col-start-2 sm:text-sm"
                                                        onClick={connectWallet}
                                                    >
                                                        Connect your wallet
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white  px-4 py-2 text-base font-medium text-gray-700 shadow-sm  hover:bg-gray-50 sm:col-start-1 sm:mt-0 sm:text-sm"
                                                        onClick={() => setOpen(false)}
                                                        ref={cancelButtonRef}
                                                    >
                                                        Cancel
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-5">
                                <div className="mx-auto flex w-full justify-center text-center lg:w-[500px]">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    >
                                        <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all dark:bg-primary-dark ">
                                            <div className="w-full text-center">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="justify-center text-lg text-gray-900 dark:text-gray-100"
                                                >
                                                    Send 1 Coffee for 0.001 ETH
                                                </Dialog.Title>

                                                {currentAccount && (
                                                    <form className=" mx-auto mt-4 w-full justify-center text-center">
                                                        <div className="input-container">
                                                            <input
                                                                onChange={onNameChange}
                                                                placeholder="Name"
                                                                className="input peer text-black placeholder-transparent "
                                                                id="name"
                                                                name="name"
                                                                type="text"
                                                                required
                                                            />
                                                            <label
                                                                htmlFor="name"
                                                                className="
                                                            label
                                                            peer-placeholder-shown:top-2.5
                                                            peer-placeholder-shown:left-3
                                                            peer-placeholder-shown:text-base
                                                            peer-placeholder-shown:text-gray-400
                                                            peer-focus:-top-6
                                                            peer-focus:text-base
                                                            peer-focus:text-gray-400"
                                                            >
                                                                Name
                                                            </label>
                                                        </div>

                                                        <div className="input-container mt-8">
                                                            <textarea
                                                                required
                                                                rows={2}
                                                                onChange={onMessageChange}
                                                                placeholder="Enjoy your coffee!"
                                                                id="message"
                                                                name="message"
                                                                className="input peer text-black placeholder-transparent"
                                                            />
                                                            <label
                                                                htmlFor="message"
                                                                className="
                                                            label 
                                                            peer-placeholder-shown:top-2.5
                                                            peer-placeholder-shown:left-3
                                                            peer-placeholder-shown:text-base
                                                            peer-placeholder-shown:text-gray-400
                                                            peer-focus:-top-6
                                                            peer-focus:text-base
                                                            peer-focus:text-gray-400"
                                                            >
                                                                Message
                                                            </label>
                                                        </div>

                                                        <div className="mt-6">
                                                            <button
                                                                type="button"
                                                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-yellow-100 py-4 text-black shadow-sm hover:bg-yellow-200   sm:col-start-2 sm:text-sm"
                                                                onClick={buyCoffee}
                                                            >
                                                                <p className="text-[14px]">Send</p>
                                                            </button>
                                                        </div>
                                                    </form>
                                                )}
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                                <div className="flex w-full justify-center text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    >
                                        <Dialog.Panel className=" relative w-full transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all dark:bg-primary-dark ">
                                            <div className="w-full text-center">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="justify-center text-lg text-gray-900 dark:text-gray-100"
                                                >
                                                    {currentAccount && "Memos received"}
                                                </Dialog.Title>

                                                <div className="flex flex-col gap-y-2  text-center">
                                                    {currentAccount &&
                                                        memos.map((memo: any, idx: number) => {
                                                            return (
                                                                <div
                                                                    key={idx}
                                                                    className="mx-auto h-12 w-full border-b text-left"
                                                                >
                                                                    <p>
                                                                        From: {memo?.name} at{" "}
                                                                        {memo?.timestamp.toString()}
                                                                    </p>

                                                                    <b className="">
                                                                        {memo?.message}
                                                                    </b>
                                                                </div>
                                                            )
                                                        })}
                                                </div>
                                            </div>

                                            {/* <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                        {!currentAccount && (
                                            <>
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full justify-center rounded-md  border bg-yellow-100 px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-yellow-200   sm:col-start-2 sm:text-sm"
                                                    onClick={connectWallet}
                                                >
                                                    Connect your wallet
                                                </button>
                                                <button
                                                    type="button"
                                                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm  hover:bg-gray-50 sm:col-start-1 sm:mt-0 sm:text-sm"
                                                    onClick={() => setOpen(false)}
                                                    ref={cancelButtonRef}
                                                >
                                                    Cancel
                                                </button>
                                            </>
                                        )}
                                    </div> */}
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        )}
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}
export default Coffee
