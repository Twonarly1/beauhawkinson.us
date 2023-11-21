"use client";
import { Button, Drawer, Link } from "components/core";
import { NAV_LINKS, SOCIAL_LINKS } from "lib/data";
import { useBreakpoint, useDisclosure } from "lib/hooks";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";

import type { LinkItem } from "lib/data";
import type { Icon } from "components/icons";

/**
 * Mobile Sidebar component.
 */
const Sidebar = () => {
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = useState(false);
  //   const { isOpen, onOpen, onClose } = useDisclosure();

  const currentBreakpoint = useBreakpoint();
  useEffect(() => {
    if (currentBreakpoint === "md") {
      setIsOpen(false);
    }
  }, [currentBreakpoint]);

  return (
    <Drawer
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      trigger={
        <Button
          className="flex items-center md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu className="h-5 w-5 cursor-pointer" />
        </Button>
      }
      title={
        <Link href="/">
          <Button
            className={`${
              segment == null && "text-primary hover:text-primary"
            }`}
          >
            Beau Hawkinson
          </Button>
        </Link>
      }
    >
      <nav className="flex w-full flex-1 flex-col items-center justify-center gap-2 p-10">
        <div className="flex flex-col items-center gap-2">
          {NAV_LINKS.slice(0, 6).map((item: LinkItem) => {
            const isActive = item.href === `/${segment}`;
            return (
              <Link
                isExternal={item.isExternal}
                key={item.href}
                href={item.href}
              >
                <Button
                  onClick={() => setIsOpen(false)}
                  className={`${isActive && "text-primary hover:text-primary"}`}
                >
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </div>
        <div className=" flex items-center gap-2 py-4">
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon as Icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                isExternal={item.isExternal}
              >
                <Button className="group relative gap-2">
                  <Icon className=" h-6 w-6 hover:opacity-100 group-hover:scale-110 dark:to-gray-700" />
                  {/* <p>{item.name}</p> */}
                  <div className="ring-primary absolute -bottom-1 right-0 h-6 w-6 rounded-full ring-1">
                    <Image
                      alt={item.name}
                      src={item.imageSrc ?? ""}
                      height={80}
                      width={80}
                      className="h-6 w-6 rounded-full object-cover"
                    />
                  </div>
                </Button>
              </Link>
            );
          })}
        </div>
      </nav>
    </Drawer>
    // <Drawer
    //   open={isOpen}
    //   onOpenChange={() => setIsOpen(!isOpen)}
    //   title={
    //     <Link href="/">
    //       <Button
    //         className={`${
    //           segment == null && "text-primary hover:text-primary"
    //         }`}
    //       >
    //         Beau Hawkinson
    //       </Button>
    //     </Link>
    //   }
    //   trigger={
    //     <div className="md:hidden">
    //       <FiMenu className="h-5 w-5 cursor-pointer" />
    //     </div>
    //   }
    // >
    //   <nav className="mt-8 flex w-full flex-col items-center gap-2">
    //     {NAV_LINKS.slice(0, 6).map((item: LinkItem) => {
    //       const isActive = item.href === `/${segment}`;
    //       return (
    //         <Link isExternal={item.isExternal} key={item.href} href={item.href}>
    //           <Button
    //             className={`${isActive && "text-primary hover:text-primary"}`}
    //           >
    //             {item.name}
    //           </Button>
    //         </Link>
    //       );
    //     })}
    //   </nav>
    // </Drawer>
  );
};

export default Sidebar;
