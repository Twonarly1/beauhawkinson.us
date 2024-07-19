import { projects } from "lib/data";

import { Header, Project } from "components";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-3xl p-4 pb-24 pt-6">
      <Header />

      <ul className="mt-12 grid gap-6 divide-y divide-neutral-300">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
