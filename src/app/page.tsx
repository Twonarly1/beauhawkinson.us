import { Button } from "components/core";
import app from "lib/config/app";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const HomePage = async () => {
  return (
    <div className="flex w-full flex-col gap-16 py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-xl border-2 p-16 md:flex-row">
        <div className="relative flex flex-col items-start gap-2">
          <h1 className="flex text-4xl font-bold tracking-wide">
            {app.name} 🤙 🦢{" "}
          </h1>

          <h2 className="text-xl font-light">{app.description}</h2>

          <Link href="/projects">
            <Button className="-mx-3">
              Cover Letter <GoArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// const items: TabRecord[] = [
//   {
//     value: "Me",
//     content: (
//       <div className="flex h-[400px] w-full flex-col gap-8 rounded-xl border-2 p-16 md:flex-row">
//         <div className="relative flex flex-col items-start gap-2">
//           <h1 className="flex text-4xl font-bold tracking-wide">
//             {app.name} 🤙 🦢{" "}
//           </h1>

//           <p className="font-light">Twonarly1</p>
//           <h2 className="text-xl font-light">{app.description}</h2>
//           <p>Building at Anima Reflection and Freeride MN</p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     value: "Projects",
//     content: <ProjectsPage />,
//   },
//   {
//     value: "Tech",
//     content: (
//       <div className="grid h-[400px] grid-cols-8 items-center gap-4 rounded-xl border-2 p-16">
//         {skillsData.map((skill) => (
//           <Image
//             key={skill.tooltip}
//             src={skill.imageSrc}
//             alt={skill.tooltip}
//             height={40}
//             width={40}
//             className=""
//           />
//         ))}
//       </div>
//     ),
//   },
// ];
