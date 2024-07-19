export interface ProjectProps {
  name: string;
  description: string;
  date: string;
  links: {
    name: string;
    url: string;
  }[];
}

const projects: ProjectProps[] = [
  {
    name: "Mirage Swap",
    description:
      "MirageSwap is a multichain, gas-efficient decentralized exchange (DEX) aggregator and automated market maker (AMM) that unifies liquidity across the NFT ecosystem.",
    date: "Coming Soon",
    links: [
      {
        name: "website",
        url: "https://mirageswap.io/",
      },
      {
        name: "code",
        url: "",
      },
    ],
  },
  {
    name: "NEUROally",
    description:
      "A task management application designed to support users to track and complete tasks that might previously have been daunting. Featuring sophisticated notification reminders tailored to user preferences and workflow optimization- turning challenges into accomplishments and peace of mind.",
    date: "July, 2024",
    links: [
      {
        name: "website",
        url: "https://www.neuroally.app/",
      },
      {
        name: "code",
        url: "",
      },
    ],
  },
  {
    name: "UI Library",
    description: "Design system & UI kit for Anima Reflection.",
    date: "Jan, 2024",
    links: [
      {
        name: "website",
        url: "https://storybook.animareflection.com/",
      },
      {
        name: "code",
        url: "https://github.com/animareflection/ui",
      },
    ],
  },
  {
    name: "Freeride MN",
    description:
      "Consolidating MN MTB experiences. Events, trails, blog posts, forums.",
    date: "Oct, 2023",
    links: [
      {
        name: "website",
        url: "https://www.freeridemn.com/",
      },
      {
        name: "code",
        url: "",
      },
    ],
  },
  {
    name: "Freeride Indoor",
    description:
      "Landing page for Freeride Indoor. A informational website to gain interest in a new indoor mountain biking park.",
    date: "Oct, 2023",
    links: [
      {
        name: "website",
        url: "https://www.freerideindoor.com/",
      },
      {
        name: "code",
        url: "",
      },
    ],
  },
  {
    name: "Chisago Hardware",
    description: "Build and design the Chisago Hardware website.",
    date: "Jan, 2023",
    links: [
      {
        name: "website",
        url: "https://www.chisagohardware.com/",
      },
      {
        name: "code",
        url: "",
      },
    ],
  },
];

export { projects };
