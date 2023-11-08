import app from "lib/config/app";
import Image from "next/image";
import { compareDesc, format, parseISO } from "date-fns";
import { allProjects, Project } from "../../.contentlayer/generated";
import { Link } from "components/core";

const HomePage = async () => {
  const projects: Project[] = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {/* <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="rebeccapurple"
          className="h-12 w-12"
        >
          <path
            className="animate-dash stroke-current"
            stroke-linecap="round"
            stroke-linejoin="round"
            strokeDasharray={1000}
            strokeDashoffset={400}
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div> */}
      <div className="flex gap-8">
        <div className="h-20 w-20 rounded-full shadow-[0_0_10px_theme('colors.pink.500')]">
          <Image
            src={app.avatar}
            alt={app.name}
            height={260}
            width={260}
            quality={100}
            className="h-20 w-20 rounded-full object-cover shadow-xl"
          />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-semibold">{app.name} 🤙 🦢</h1>
          <h2 className="text-xl font-light">{app.description}</h2>
          {/* <div className="flex flex-col items-start">
            {NAV_LINKS.map((item) => {
              const Icon = item.icon as Icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  isExternal={item.isExternal}
                  className="group"
                >
                  <Button>
                    <Icon className=" h-7 w-7 rounded-md bg-gradient-to-br from-pink-500 to-gray-300 p-1 text-white transition-all duration-300 hover:opacity-100 group-hover:scale-110 dark:to-gray-700" />
                    <p className="hidden md:flex">{item.name}</p>
                  </Button>
                </Link>
              );
            })}
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon as Icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  isExternal={item.isExternal}
                  className="group"
                >
                  <Button>
                    <Icon className=" h-7 w-7 rounded-md bg-gradient-to-br from-pink-500 to-gray-300 p-1 text-white transition-all duration-300 hover:opacity-100 group-hover:scale-110 dark:to-gray-700" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </div> */}
        </div>
      </div>
      <section className="mx-auto w-full max-w-3xl py-16">
        {/* <h1 className="mb-8 text-3xl font-bold">Projects</h1> */}
        <div className="grid w-full flex-1 gap-8">
          {projects.map((project, idx) => (
            <Link
              href={project.url}
              key={idx}
              className="rounded-lg bg-zinc-100/50 px-4 shadow-[0_0_10px_theme('colors.pink.500')] backdrop-blur-md dark:bg-zinc-800/50"
            >
              <div className="p-4">
                <h2 className="text-xl">{project.title}</h2>
                <time
                  dateTime={project.date}
                  className="mb-2 block text-xs text-gray-600"
                >
                  {format(parseISO(project.date), "LLLL d, yyyy")}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
