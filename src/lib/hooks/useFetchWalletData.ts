"use client";

import { normalize } from "path";
import { useEffect, useState } from "react";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
});

function useFetchWalletData(address: `0x${string}`) {
  const [confirmedAddress, setConfirmedAddress] = useState<string | null>("");

  const [confirmedEnsName, setConfirmedEnsName] = useState<string | null>("");

  const [ensAvatar, setEnsAvatar] = useState<string | null>("");

  useEffect(() => {
    const getWalletData = async () => {
      if (address?.includes(".eth")) {
        // @ts-ignore
        const _address = await client.getEnsAddress({
          name: normalize(address),
        });
        return { ensName: address, address: _address };
      } else {
        // @ts-ignore
        const ensName = await client.getEnsName({
          address: address,
        });
        return { ensName, address };
      }
    };

    const updateConfirmedValues = async () => {
      const { ensName, address } = await getWalletData();

      if (ensName !== null) {
        // @ts-ignore
        const avatar = await client.getEnsAvatar({
          name: normalize(ensName ?? ""),
        });
        setEnsAvatar(avatar);
      }
      setConfirmedEnsName(ensName);
      setConfirmedAddress(address);
    };

    updateConfirmedValues();
  }, [address]);

  return { confirmedAddress, confirmedEnsName, ensAvatar };
}

export default useFetchWalletData;
