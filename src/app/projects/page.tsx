import Link from "next/link";
import { allProjects, Project } from "../../../.contentlayer/generated";
import Image from "next/image";

import type { Metadata } from "next";
import app from "lib/config/app";

export const metadata: Metadata = {
  title: `Projects | ${app.name}`,
  description: "A list of my showcase projects!",
};

function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
}

const ProjectsPage = () => {
  return (
    <section className="mx-auto max-w-4xl py-8">
      <h1 className="mb-8 text-center text-3xl font-semibold">Projects</h1>
      <div className="border-primary-200 dark:border-primary-700 grid border-t">
        {allProjects
          .sort((a, b) => {
            if (new Date(a.updatedAt) > new Date(b.updatedAt)) {
              return -1;
            }
            return 1;
          })
          .map((project: Project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="border-primary-200 hover:bg-primary-50 dark:hover:bg-primary-950 dark:border-primary-700 flex items-center gap-8 border-b p-6"
            >
              <div className="h-12 w-12 shrink-0 rounded-full ">
                <Image
                  alt={project.title}
                  src={project.image}
                  height={200}
                  width={200}
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />
              </div>
              <p className="w-60 text-lg">{project.title}</p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                {formatDate(project.updatedAt)}
              </p>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
