export interface TechnologyProps {
  name: string;
  description: string;
  url: string;
}

const technologies: TechnologyProps[] = [
  {
    name: "Next.js",
    description: "The React framework for the web.",
    url: "https://nextjs.org/",
  },
  {
    name: "TypeScript",
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Shadcn UI",
    description:
      "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
    url: "https://ui.shadcn.com/",
  },
  {
    name: "PWA",
    description:
      "Progressive Web Apps: Capabilities that enable app experiences, built and deployed on the web.",
    url: "https://web.dev/explore/progressive-web-apps",
  },
  {
    name: "Tanstack Query",
    description: "Powerful asynchronous state management.",
    url: "https://tanstack.com/query/v5",
  },
  {
    name: "Biome",
    description: "Format, lint, and more in a fraction of a second.",
    url: "https://biomejs.dev/",
  },
  {
    name: "Drizzle",
    description: "A headless TypeScript ORM.",
    url: "https://orm.drizzle.team/",
  },
  {
    name: "Neon DB",
    description:
      "A serverless Postgres platform designed to help you build reliable and scalable applications faster. We separate compute and storage to offer modern developer features such as autoscaling, branching, point-in-time restore, and more",
    url: "https://neon.tech/home",
  },
  {
    name: "Elysia",
    description:
      "Elysia is an ergonomic web framework for building backend servers with Bun. Designed with simplicity and type safety in mind with familiar API with extensive support for TypeScript, optimized for Bun.",
    url: "https://elysiajs.com/",
  },
  {
    name: "GraphQL",
    description: "A query language for your API.",
    url: "https://graphql.org/",
  },
  {
    name: "Wagmi",
    description:
      "Type Safe, Extensible, and Modular by design. Build high-performance blockchain frontends.",
    url: "https://wagmi.sh/",
  },
  {
    name: "Rainbow Kit",
    description: "The best way to connect a wallet.",
    url: "https://www.rainbowkit.com/",
  },
  {
    name: "Sanity",
    description:
      "A platform that provides a headless CMS. Treat content as data—actionable and scalable across your business—with the Sanity Composable Content Cloud.",
    url: "https://www.sanity.io/",
  },
  {
    name: "Supabase",
    description:
      "A an open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.",
    url: "https://supabase.com/",
  },
  {
    name: "NextAuth.js",
    description: "Authentication for Next.js.",
    url: "https://next-auth.js.org/",
  },
  {
    name: "Vercel",
    description:
      "Your complete platform for the web. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
    url: "https://vercel.com/",
  },
  {
    name: "GitHub",
    description:
      "GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, etc.",
    url: "https://github.com/",
  },
  {
    name: "Framer Motion",
    description:
      "Complete documentation of the Framer Motion animation library. A production-ready motion library for React.",
    url: "https://github.com/",
  },
  {
    name: "StepZen",
    description: "Build, optimize and scale APIs quickly and easily.",
    url: "https://stepzen.com/",
  },
  {
    name: "Serwist",
    description: "A Swiss Army knife for service workers.",
    url: "https://serwist.pages.dev/",
  },
  {
    name: "Ark UI",
    description:
      "Ark UI is a headless library for building reusable, scalable Design Systems that works for a wide range of JS frameworks.",
    url: "https://ark-ui.com/",
  },
];

export { technologies };
