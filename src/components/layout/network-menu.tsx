"use client";
import { Button, Popover } from "components/core";
import { useNetworkStore } from "components/store";
import { networks } from "lib/data";
import { useDisclosure } from "lib/hooks";
import { PiCaretDown } from "react-icons/pi";

/**
 * Network Menu component.
 */
const NetworkMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const setSelectedNetwork = useNetworkStore(
    (state) => state.setSelectedNetwork
  );
  const selectedNetwork = useNetworkStore((state) => state.selectedNetwork);
  return (
    <div className="relative z-50">
      <Popover
        open={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        placement="bottom"
        mt={0}
        w={8}
        trigger={
          <Button className="border">
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
                setSelectedNetwork(network);
                onClose();
              }}
              variant="dropdown"
            >
              <network.icon />
              {network.name}
            </Button>
          ))}
        </>
      </Popover>
    </div>
  );
};

export default NetworkMenu;
