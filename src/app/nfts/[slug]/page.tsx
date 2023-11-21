"use client";

import {
  useFetchUserPoaps,
  useFetchUserTokens,
  useFetchWalletData,
  useIsMounted,
} from "lib/hooks";
import { truncateString } from "lib/util";
import Image from "next/image";
import { useNetworkStore } from "components/store";
import NetworkMenu from "components/layout/network-menu";

type Props = {
  params: { slug: "0x${string}" };
};

const Nfts = ({ params }: Props) => {
  const isMounted = useIsMounted();

  const selectedNetwork = useNetworkStore((state) => state.selectedNetwork);

  const { confirmedAddress, confirmedEnsName, ensAvatar } = useFetchWalletData(
    params.slug
  );

  const { data: nfts, isLoading: nftsLoading } = useFetchUserTokens(
    confirmedAddress,
    selectedNetwork.base
  );

  const { data: poaps, isLoading: poapsLoading } =
    useFetchUserPoaps(confirmedAddress);

  if (!isMounted) return null;

  if (nftsLoading || poapsLoading) return null;

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center gap-4 pt-4">
        {ensAvatar ? (
          <Image
            src={ensAvatar}
            alt="user avatar"
            draggable
            height={24}
            width={24}
            className="rounded-full"
          />
        ) : (
          <div className="h-6 w-6 rounded-full bg-pink-500" />
        )}

        <p>{confirmedEnsName && confirmedEnsName}</p>
        <p>{truncateString(confirmedAddress ?? "", 6)}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {nfts?.map((nft: any, idx: number) => (
          <div key={idx} className="w-[260px]">
            <Image
              className="aspect-square h-[260px] w-full rounded-lg bg-black shadow-lg"
              src={nft.token.imageSmall}
              alt={nft.token.name ?? nft.token.tokenId}
              height={400}
              width={400}
            />
            <p className="w-full overflow-hidden truncate">
              {nft.token.name ?? nft.token.tokenId}
            </p>
          </div>
        ))}

        {poaps?.map((poap: any, idx: number) => (
          <div key={idx} className="w-[260px]">
            <Image
              className="aspect-square h-[260px] w-full rounded-lg bg-black shadow-lg"
              src={poap.event.image_url}
              alt={poap.event.name ?? poap.event.id}
              height={400}
              width={400}
            />
            <p className="w-full overflow-hidden truncate">
              {poap.event.name ?? poap.event.id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nfts;
