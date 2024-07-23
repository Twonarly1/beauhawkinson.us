import Link from "next/link";

import { technologies } from "lib/data";

import type { TechnologyProps } from "lib/data";

const Tech = () => {
  return (
    <div className="mt-20 w-full">
      <i className="text-fg-muted text-[13px] leading-5">
        A curated list of preferred technologies and utilities I work with
        regularly. Please note that this is not an exhaustive list, as there are
        many more tools and technologies I am proficient in.
      </i>

      <ul className="mt-20 grid gap-6 divide-y divide-neutral-300">
        {technologies.map(({ name, description, url }: TechnologyProps) => (
          <li key={name} className="group grid gap-4 pb-6">
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full font-bold transition-transform duration-500 group-hover:translate-x-1 group-hover:underline"
            >
              {name}
            </Link>

            <code className="text-xs leading-5 text-black antialiased">
              {description}
            </code>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tech;
