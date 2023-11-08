import { SOCIAL_LINKS } from "lib/data";

import type { Icon } from "components/icons";
import { Button, Link } from "components/core";

const Footer = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-center gap-4 p-2">
      {SOCIAL_LINKS.map((item) => {
        const Icon = item.icon as Icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            isExternal={item.isExternal}
            className="group -mx-2"
          >
            <Button>
              <Icon className=" h-7 w-7 p-1 text-white transition-all duration-300 hover:opacity-100 group-hover:scale-110 dark:to-gray-700" />
              {/* <p className="hidden md:flex">{item.name}</p> */}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
