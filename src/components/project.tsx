import Link from "next/link";

import type { ProjectProps } from "lib/data";

interface Props {
  project: ProjectProps;
}

const Project = ({ project }: Props) => {
  const { name, description, date, links } = project;

  return (
    <li className="group grid gap-4 py-6">
      <b className="w-full transition-transform duration-500 group-hover:translate-x-1">
        {name}
      </b>
      <code className="text-xs leading-5 text-black antialiased">
        {description}
      </code>
      <div className="flex w-full items-baseline justify-between">
        <p className="text-xs font-light text-neutral-600">{date}</p>
        <ul className="flex items-center">
          {links?.map(({ name, url }) => (
            <li key={name}>
              {url && (
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-8 flex items-center gap-2 text-xs font-light text-neutral-600 hover:text-black hover:underline"
                >
                  {name} &#8599;
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Project;
