import skillsData from "lib/data/skills";
import Image from "next/image";
import app from "lib/config/app";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Tech | ${app.name}`,
  description: "A list of my technology experience!",
};

const TechPage = () => {
  return (
    <div>
      <div className="grid h-[400px] grid-cols-8 items-center gap-4 rounded-xl border-2 p-16">
        {skillsData.map((skill) => (
          <Image
            key={skill.tooltip}
            src={skill.imageSrc}
            alt={skill.tooltip}
            height={40}
            width={40}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default TechPage;
