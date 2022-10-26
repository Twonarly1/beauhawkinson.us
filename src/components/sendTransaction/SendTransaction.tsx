import { parseEther } from "ethers/lib/utils"
import * as React from "react"
import { useDebounce } from "use-debounce"
import {
    useAccount,
    useContractWrite,
    usePrepareContractWrite,
    usePrepareSendTransaction,
    useSendTransaction,
    useWaitForTransaction,
} from "wagmi"
import abi from "src/lib/abi/BuyMeACoffee.json"

export default function SendTransaction() {
    const { address }: any = useAccount()
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
    return (
        <>
            <button
                onClick={() => sendTransaction?.()}
                className=""
                disabled={!address || isLoading || !sendTransaction || !sendTo || !amount}
            >
                {isLoading ? "Sending..." : "Send .001 ETH"}
            </button>
            {isSuccess && (
                <div>
                    Successfully sent {amount} ether to {sendTo}
                    <div>
                        <a href={`https://etherscan.io/tx/${contractWrite.data?.hash}`}>
                            Etherscan
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}
