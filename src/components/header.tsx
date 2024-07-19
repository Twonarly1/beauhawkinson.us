import Image from "next/image";
import Link from "next/link";

import { app } from "lib/config/app";
import { socials } from "lib/data";

const Header = () => {
  return (
    <nav className="flex w-full items-center justify-between rounded-lg py-4">
      <div className="flex items-center gap-2">
        <Image
          alt="Profile Picture"
          src="/avatar.png"
          height={256}
          width={256}
          quality={100}
          draggable={false}
          className="h-5 w-5 shrink-0 rounded-full object-cover"
        />
        <h1 className="text-lg font-semibold">{app.name}</h1>
      </div>

      <ul className="flex items-center gap-4">
        {socials.map(({ name, url, icon }) => (
          <li key={name}>
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 scale-90 text-neutral-600 hover:scale-100 hover:text-black hover:opacity-75"
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
