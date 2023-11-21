import { SOCIAL_LINKS } from "lib/data";
import { Button, Link } from "components/core";
import Image from "next/image";

import type { Icon } from "components/icons";

const Footer = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-center gap-4 p-2">
      {SOCIAL_LINKS.map((item) => {
        const Icon = item.icon as Icon;
        return (
          <Link key={item.href} href={item.href} isExternal={item.isExternal}>
            <Button className="group relative gap-2">
              <Icon className="h-5 w-5 hover:opacity-100 group-hover:scale-110 dark:to-gray-700" />
              <div className="ring-primary absolute -top-1 right-0 h-5 w-5 rounded-full ring-1 group-hover:flex">
                <Image
                  alt={item.name}
                  src={item.imageSrc ?? ""}
                  height={80}
                  width={80}
                  className="h-5 w-5 rounded-full object-cover"
                />
              </div>
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
