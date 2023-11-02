import { Arbitrum, Eth, Optimism, Polygon } from "components/icons"

import type { Icon } from "components/icons"

export type Network = {
    name: string
    base: string
    icon: Icon
}

const networks: Network[] = [
    { name: "mainnet", icon: Eth, base: "api.reservoir" },
    { name: "optimism", icon: Optimism, base: "api-optimism.reservoir" },
    { name: "arbitrum", icon: Arbitrum, base: "api-arbitrum.reservoir" },
    { name: "polygon", icon: Polygon, base: "api-polygon.reservoir" },
]

export default networks
