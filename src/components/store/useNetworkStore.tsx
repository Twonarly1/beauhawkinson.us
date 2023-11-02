import { create } from "zustand"
import { networks } from "lib/data"

import type { Network } from "lib/data"

export type NetworkState = {
    selectedNetwork: Network
    setSelectedNetwork: (network: Network) => void
}

const useNetworkStore = create<NetworkState>((set) => ({
    selectedNetwork: networks[0], // Initialize with the first network
    setSelectedNetwork: (network: Network) =>
        set(() => ({ selectedNetwork: network })),
}))

export default useNetworkStore
