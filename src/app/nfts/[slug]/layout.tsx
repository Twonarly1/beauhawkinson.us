import { redirect } from "next/navigation";
import { RiSearchLine } from "react-icons/ri";
import app from "lib/config/app";

import type { ReactNode } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `NFTs | ${app.name}`,
  description: "My personal NFTs!",
};

type Props = {
  children: ReactNode;
};

const NftLayout = ({ children }: Props) => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const address = String(formData.get("address"));

    redirect(`/nfts/${address}`);
  };
  return (
    <div className="relative mx-auto min-h-screen w-full py-12">
      <form
        className="relative mx-auto flex w-full max-w-lg items-center rounded-full border border-zinc-200 dark:border-zinc-800"
        action={handleSubmit}
      >
        <RiSearchLine className="absolute ml-3 flex h-5 w-5 items-center text-zinc-400" />
        <input
          placeholder="Search ENS or wallet address"
          type="text"
          name="address"
          className="flex h-10 w-full flex-1 rounded-full bg-transparent pl-12 outline-none"
        />
      </form>

      <>{children}</>
    </div>
  );
};

export default NftLayout;
