"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import TimeAgo from "react-timeago";

interface Experience {
  id: number;
  title: string;
  type: string;
  date: string;
  timeago?: string;
}

const experience: Experience[] = [
  {
    id: 1,
    title: "Software Engineer",
    type: "Full-time",
    date: "Sep 2024 - Present •",
    timeago: "Sep 23, 2024",
  },
  {
    id: 2,
    title: "Software Engineer",
    type: "Contract",
    date: "Aug 2024 - Sep 2024 • 2 months",
  },
];

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const images: GalleryImage[] = [
  {
    id: 1,
    src: "/omni-partners/asu.png",
    alt: "asu",
    height: 216,
    width: 384,
  },
  {
    id: 2,
    src: "/omni-partners/carei.png",
    alt: "carei",
    height: 144,
    width: 256,
  },
  {
    id: 3,
    src: "/omni-partners/csu.png",
    alt: "csu",
    height: 251,
    width: 384,
  },
  {
    id: 4,
    src: "/omni-partners/fablevision.png",
    alt: "fablevision",
    height: 239,
    width: 640,
  },
  {
    id: 5,
    src: "/omni-partners/igdilab.png",
    alt: "igdi lab",
    height: 216,
    width: 384,
  },
  {
    id: 6,
    src: "/omni-partners/mndoe.png",
    alt: "mndoe",
    height: 51,
    width: 384,
  },
  {
    id: 7,
    src: "/omni-partners/tdts.png",
    alt: "tdts",
    height: 256,
    width: 256,
  },
  {
    id: 8,
    src: "/omni-partners/umn.png",
    alt: "umn",
    height: 216,
    width: 384,
  },
  {
    id: 9,
    src: "/omni-partners/uoregon.png",
    alt: "uoregon",
    height: 83,
    width: 384,
  },
  {
    id: 10,
    src: "/omni-partners/utahca.png",
    alt: "utahca",
    height: 88,
    width: 372,
  },
];

const Work = () => {
  return (
    <div className="mt-20 grid w-full gap-4 pb-10">
      <Image
        alt="omni llc"
        src="/omni.jpeg"
        height={200}
        width={200}
        className="h-24 w-24"
      />
      <Link
        href="https://omni.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full font-bold transition-transform duration-500 hover:translate-x-1 group-hover:underline"
      >
        Omni LLC &#8599;
      </Link>

      <code className="text-xs leading-5 text-black antialiased">
        Omni LLC is a versatile software development agency specializing in
        creating impactful digital solutions from websites to mobile apps and
        beyond. Our expertise spans a wide range of software, tailored to meet
        the unique needs of each client. We have experience working with
        businesses of a variety of sizes.
      </code>

      <ul className="mt-10 flex flex-col">
        {experience.map(({ id, title, type, date, timeago }, index) => {
          const isLast = index === experience.length - 1;

          return (
            <li key={id} className="grid">
              <div className="flex items-center gap-6">
                <div className="bg-fg-muted/50 h-1.5 w-1.5 shrink-0 rounded-full" />
                <b className="w-full">{title}</b>
              </div>
              <div className="flex items-start justify-start gap-4">
                <div
                  className={cn(
                    "bg-fg-muted/30 rounded-y-[2px] ml-0.5 h-20 w-0.5",
                    isLast ? "hidden" : ""
                  )}
                />
                <div
                  className={cn(
                    "mt-2 ml-2 flex flex-col gap-2",
                    isLast ? "ml-8" : ""
                  )}
                >
                  <code className="text-xs leading-5 text-black antialiased">
                    {type}
                  </code>
                  <p className="text-fg-muted text-xs font-light">
                    {date} {timeago && <TimeAgo date={timeago} />}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <b className="mt-10 mb-2 text-right">Parnets and clients &darr;</b>

      <div className="flex w-full gap-4 overflow-clip overflow-scroll pb-4">
        {images.map(({ id, src, alt, width, height }) => (
          <Image
            key={id}
            alt={alt}
            src={src}
            width={width}
            height={height}
            className="border-accent/50 block h-auto w-full rounded-lg border object-contain p-4"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
