"use client";

import { NAV_LINKS, SOCIAL_LINKS } from "lib/data";
import { usePathname } from "next/navigation";
import NetworkMenu from "./network-menu";
import Sidebar from "./sidebar";
import ThemeChanger from "./theme-changer";
import { Button, Link } from "components/core";

import type { Icon } from "components/icons";

/**
 * Header component.
 */
const Header = () => {
  let pathname = usePathname() || "/";

  return (
    <nav className="sticky top-3 z-50 mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-full bg-zinc-100/50 px-4 backdrop-blur-md dark:bg-zinc-800/50">
      <div className="flex items-center">
        {NAV_LINKS.map((item) => {
          //   const Icon = item.icon as Icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              isExternal={item.isExternal}
              className="group"
            >
              <Button>
                {/* <Icon className=" h-7 w-7 rounded-md bg-gradient-to-br from-pink-500 to-gray-300 p-1 text-white transition-all duration-300 hover:opacity-100 group-hover:scale-110 dark:to-gray-700" /> */}
                <p className="hidden md:flex">{item.name}</p>
              </Button>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        {pathname.includes("/nfts") && <NetworkMenu />}
        <ThemeChanger />
        <Sidebar />
      </div>
    </nav>
  );
};

export default Header;
