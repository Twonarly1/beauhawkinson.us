"use client"
import { useState, useEffect } from "react"
import { RESERVOIR_API_KEY } from "../config/env"

function useFetchUserTokens(address: string | null, chain: string) {
    const [data, setData] = useState<any | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    console.log(RESERVOIR_API_KEY!)

    useEffect(() => {
        async function fetchData() {
            const options = {
                method: "GET",
                headers: {
                    accept: "*/*",
                    "x-api-key": RESERVOIR_API_KEY!,
                },
            }

            try {
                const response = await fetch(
                    `https://${chain}.tools/users/${address}/tokens/v7?limit=200`,
                    options,
                )
                const data = await response.json()
                setData(data.tokens)
            } catch (error) {
                setError("Error fetching data.")
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [address, chain])

    return { data, isLoading, error }
}

export default useFetchUserTokens
