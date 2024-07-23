import Link from "next/link";

import { projects } from "lib/data";

import type { ProjectProps } from "lib/data";

const Work = () => {
  return (
    <div className="mt-20 w-full">
      <i className="text-fg-muted text-[13px] leading-5">
        A non-comprehensive list of freelance and startup projects I have
        contributed to, showcasing my experience and expertise in various
        domains.
      </i>
      <ul className="mt-20 grid gap-10 divide-y divide-neutral-300">
        {projects.map(({ name, description, date, links }: ProjectProps) => (
          <li key={name} className="group grid gap-4 pb-10">
            <b className="w-full transition-transform duration-500 group-hover:translate-x-1">
              {name}
            </b>
            <code className="text-xs leading-5 text-black antialiased">
              {description}
            </code>
            <div className="flex w-full items-baseline justify-between">
              <p className="text-fg-muted text-xs font-light">{date}</p>
              <ul className="flex items-center">
                {links?.map(({ name, url }) => (
                  <li key={name}>
                    {url && (
                      <Link
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fg-muted ml-8 flex items-center gap-2 text-xs font-light hover:text-black hover:underline"
                      >
                        {name} &#8599;
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
