import { useState, useEffect } from "react"
import { POAP_API_KEY } from "../config/env"

function useFetchUserPoaps(address: string | null) {
    const [data, setData] = useState<any | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchData() {
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    "x-api-key":
                        "ZuVpGmwId6qxrPYcsU2ZTyROXoJixmmT4Cu6PbTVV72Sk3zSwRt56PNhZxxHdnQvP2lFtIscWVSQcNSe9zN9HTJuPGd7mJ57PtPFwZlruD4tS4yU3GUuVrZtkt1exHfa",
                },
            }

            try {
                const response = await fetch(
                    `https://api.poap.tech/actions/scan/${address}`,
                    options,
                )
                const data = await response.json()
                setData(data)
            } catch (error) {
                setError("Error fetching data.")
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [address])

    return { data, isLoading, error }
}

export default useFetchUserPoaps
