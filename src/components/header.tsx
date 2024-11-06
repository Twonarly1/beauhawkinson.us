import Image from "next/image";
import Link from "next/link";

import { app } from "lib/config/app";
import { socials } from "lib/data";

const Header = () => {
  return (
    <nav className="grid gap-4 px-4">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-lg font-semibold">{app.name}</h1>
        <Image
          alt="Profile Picture"
          src="/avatar.png"
          height={256}
          width={256}
          quality={100}
          draggable={false}
          className="h-5 w-5"
        />
      </div>

      <ul className="flex items-center gap-5">
        {socials.map(({ name, url, icon }) => (
          <li key={name}>
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted flex shrink-0 opacity-75 hover:scale-100 hover:text-black hover:opacity-100"
            >
              <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
