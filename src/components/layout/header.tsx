"use client";

import { NAV_LINKS } from "lib/data";
import { usePathname } from "next/navigation";
import NetworkMenu from "./network-menu";
import ThemeChanger from "./theme-changer";
import { Button, Link } from "components/core";
import Sidebar from "./sidebar";

/**
 * Header component.
 */
const Header = () => {
  let pathname = usePathname() || "/";

  return (
    <nav className="sticky top-0 z-50 mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-full px-4 backdrop-blur-md">
      <Link href="/">
        <Button disabled={pathname === "/"}>Beau Hawkinson</Button>
      </Link>
      <div className="flex items-center gap-4">
        {pathname.includes("/nfts") && <NetworkMenu />}
        <div className="hidden md:flex">
          <div className="flex items-center">
            {NAV_LINKS.map(({ href, isExternal, name }) => (
              <Link key={href} href={href} isExternal={isExternal}>
                <Button>{name}</Button>
              </Link>
            ))}
          </div>
        </div>
        <ThemeChanger />
        <Sidebar />
      </div>
    </nav>
  );
};

export default Header;

{
  /* <div className="group-hover:shadow-neon h-6 w-6 rounded-full bg-white">
            <Image
              alt="logo"
              src="/two-uni.jpg"
              height={80}
              width={80}
              className="h-6 w-6 rounded-full pl-0.5"
            />
          </div> */
}
