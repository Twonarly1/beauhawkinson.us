import { Button, Popover } from "components/core"
import { useNetworkStore } from "components/store"
import { networks } from "lib/data"
import { useDisclosure } from "lib/hooks"
import { PiCaretDown } from "react-icons/pi"

/**
 * Network Menu component.
 */
const NetworkMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const setSelectedNetwork = useNetworkStore(
        (state) => state.setSelectedNetwork,
    )
    const selectedNetwork = useNetworkStore((state) => state.selectedNetwork)

    return (
        <div className="relative">
            <Popover
                open={isOpen}
                onClose={onClose}
                onOpen={onOpen}
                placement="right"
                mt={3}
                w={12}
                trigger={
                    <Button variant="outline">
                        <selectedNetwork.icon />
                        {selectedNetwork.name}
                        <PiCaretDown className="h-4 w-4" />
                    </Button>
                }
            >
                <>
                    {networks.map((network) => (
                        <Button
                            key={network.name}
                            onClick={() => {
                                setSelectedNetwork(network)
                                onClose()
                            }}
                            variant="dropdown"
                        >
                            {network.name}
                        </Button>
                    ))}
                </>
            </Popover>
        </div>
    )
}

export default NetworkMenu
