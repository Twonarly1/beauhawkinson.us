import { Mdx } from "components/ui";
import Balancer from "react-wrap-balancer";
import { allProjects } from "../../../../.contentlayer/generated";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allProjects.map((project) => ({ slug: project._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === params.slug
  );
  return { title: project.title };
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

const PostLayout = ({ params }) => {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-xl py-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(project.structuredData),
        }}
      ></script>
      <div className="mb-8 text-center">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(project.updatedAt)}
        </p>
        <h1 className="max-w-[650px] text-2xl font-semibold tracking-tighter">
          <Balancer>{project.title}</Balancer>
        </h1>
      </div>
      <Mdx code={project.body.code} />
    </section>
  );
};

export default PostLayout;
