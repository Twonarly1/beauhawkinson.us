export const getProjects = () => [
    {
        id: 0,
        slug: "ebay-marketplace",
        title: "Ebay Marketplace",
        summary: "A web3 marketplace built on the Polygon (Mumbai) test network. ",
        date: "Oct 30, 2022",
        images: [
            "/projects/ebay/ebay-1.png",
            "/projects/ebay/ebay-2.png",
            "/projects/ebay/ebay-3.png",
            "/projects/ebay/ebay-4.png",
            "/projects/ebay/ebay-5.png",
        ],
        technologies: [
            {
                imageSrc: "/skills/next.svg",
            },
            {
                imageSrc: "/skills/thirdweb.webp",
            },
            {
                imageSrc: "/skills/tailwindcss.svg",
            },
            {
                imageSrc: "/skills/ts.png",
            },
            {
                imageSrc: "/skills/mm.webp",
            },
            {
                imageSrc: "/skills/vercel.svg",
            },
        ],
        linkToBuild: "https://github.com/Twonarly1/ebay-clone",
        linkToWebsite: "https://ebay-clone-ten.vercel.app/",
        points: [
            "ebay clone marketplace built on the Matic test network using Thirdweb contracts.",
            "Add items to your personal inventory.",
            "List items from your inventory to the marketplace.",
            "submit offers and bids on listed marketplace items.",
        ],
    },
    {
        id: 1,
        slug: "meets",
        title: "Swim Meets",
        summary: "Personalized swimming and diving data for coaches and users.",
        date: "Oct 11, 2022",
        images: [],
        technologies: [
            {
                imageSrc: "/skills/stepzen.png",
            },
            {
                imageSrc: "/skills/graphql.svg",
            },
            {
                imageSrc: "/skills/next.svg",
            },
            {
                imageSrc: "/skills/supabase.svg",
            },
            {
                imageSrc: "/skills/ts.png",
            },
            {
                imageSrc: "/skills/tailwindcss.svg",
            },
            {
                imageSrc: "/skills/postgresql.png",
            },
        ],
        linkToBuild: "",
        linkToWebsite: "https://meets-ten.vercel.app/",
        points: [
            "Administered users can update specific team data by creating events for authorized athletes.",
            "🔎 Filter by team, event, athlete, and more...",
            "Simulate relay times by selecting multiple athletes!",
            "Users without authorization can view all data, yet not create events.",
        ],
    },
    {
        id: 2,
        slug: "twonarly-lottery",
        title: "⏳ Twonarly Lottery ⌛️",
        summary: "Decentralized, random lottery on the Matic test network. A Papa React tutorial.",
        date: "Sep 1, 2022",
        images: ["/projects/lottery/lottery-1.png", "/projects/lottery/lottery-2.png"],
        technologies: [
            {
                imageSrc: "/skills/ethereum.png",
            },
            {
                imageSrc: "/skills/thirdweb.webp",
            },
            {
                imageSrc: "/skills/sol.png",
            },
            {
                imageSrc: "/skills/next.svg",
            },
            {
                imageSrc: "/skills/tailwindcss.svg",
            },
            {
                imageSrc: "/skills/ts.png",
            },
        ],
        linkToBuild: "https://github.com/Twonarly1/twonarly-lottery",
        linkToWebsite: "",
        points: [
            "Smart contract lottery built on Matic Network. Use ThirdWeb to deploy solidity smart contracts.",
            "Connect your digital wallet with MetaMask.",
            "Enter the lottery by purchasing tickets with your digital wallet. A user can purchase as many tickets, but there is a maximum per transaction.",
            "The deployer (admin) handles all ThirdWeb actions for drawing a random winner, restart the lottery draw, collect commissions, and the ability to refund all users in the account of a problem. This can be modified for users to have control of these admin controls.",
        ],
    },
    {
        id: 3,
        slug: "tailwindcss-shapes",
        title: "Tailwind css shapes 📐 ",
        summary: "Beautifully designed shapes and components using tailwind-css.",
        date: "Aug 14, 2022",
        images: ["/projects/shapes/shapes-1.jpg", "/projects/shapes/shapes-2.png"],
        technologies: [
            {
                imageSrc: "/skills/next.svg",
            },
            {
                imageSrc: "/skills/tailwindcss.svg",
            },
            {
                imageSrc: "/skills/ts.png",
            },
        ],
        linkToBuild: "https://github.com/Twonarly1/tailwindcss-shapes",
        linkToWebsite: "https://tailwindcss-shapes.vercel.app/",
        points: [
            "Included are 18 shapes designed using tailwind css borders and several components also designed with tailwind css and javascript.",
            "You can find shapes like the pentagon (my favorite), 🔺, right angle triangle, 🟢, 1/4 circle, 1/2 circle, 3/4 circle, hexagon, 🟦, trapezoid, ♦️, ♥️, 🌙, cone, octagon, 💎, parallelogram, and a 6 point ⭐️.",
            "Components include a coin-flip animation on image hover, curved text wrapping a circular image with animated spin, and a pausable marquee that span a flex-box. Check them out!",
            "Copy and paste the code directly into your workspace. Were talking HTML, JS, and Config code.",
        ],
    },
    {
        id: 4,
        slug: "poh-social-platform",
        title: "Proof of Humanity - Social Platform 🗺️",
        summary: "Search the Proof of Humanity registry and interact with other registrants.",
        date: "Jul 21, 2022",
        images: [
            "/projects/poh/poh-1.svg",
            "/projects/poh/poh-2.png",
            "/projects/poh/poh-3.png",
            "/projects/poh/poh-4.png",
        ],
        technologies: [
            {
                imageSrc: "/skills/stepzen.png",
            },
            {
                imageSrc: "/skills/graphql.svg",
            },
            {
                imageSrc: "/skills/next.svg",
            },
            {
                imageSrc: "/skills/ts.png",
            },
            {
                imageSrc: "/skills/supabase.svg",
            },
            {
                imageSrc: "/skills/wagmi.png",
            },
        ],
        linkToBuild: "https://github.com/Twonarly1",
        linkToWebsite: "https://poh-reddit.vercel.app/",
        points: [
            "Proof Of Humanity is a decentralized protocol with 17,000 current registrants that are all earning UBI (Universal Basic Income).",
            "All users can search the entire Proof Of Humanity registry by address or display name and return profile information and UBI data.",
            "Those currently registered with the protocol can verify their individual proof of humanity profile by connecting with MetaMask.",
            "Verified users can communicate with others in a Reddit like fashion by posting threads, commenting and liking others content.",
            "Users who are not verified can view the different threads and feeds, but cannot write or post themselves.",
        ],
    },
    {
        id: 5,
        slug: "winsome-tenley",
        title: "Winsome Tenley 🖼️",
        summary: "NFT minting website on the Matic test network. 2nd place winner. 🎉 🎊",
        date: "Mar 31, 2022",
        images: ["/projects/winsome/winsome-1.jpg", "/projects/winsome/winsome-2.png"],
        technologies: [
            {
                imageSrc: "/skills/ethereum.png",
            },
            {
                imageSrc: "/skills/thirdweb.webp",
            },
            {
                imageSrc: "/skills/sanity.webp",
            },
            {
                imageSrc: "/skills/tailwindcss.svg",
            },
            {
                imageSrc: "/skills/js.webp",
            },
        ],
        linkToBuild: "https://github.com/Twonarly1/Winsome-Tenley",
        linkToWebsite: "https://winsome-tenley.vercel.app/",
        points: [
            "This applications purpose is for an artist to deploy their NFT collection on any network using the power of ThirdWeb deployments.",
            "Users can connect their wallets and mint NFT's until the maximum drop size is met. Multiple purchases are allowed at once, yet there is a maximum number per transaction.",
            "Keep track of the current minting count and how many are still remaining.",
            "2nd place winner 🎉 🎊. Papa React NFT Drop Challenge. Competitive challenge throughout 5 days!",
        ],
    },
]

export async function fetchProjectsData(): Promise<any[]> {
    return getProjects()
}
