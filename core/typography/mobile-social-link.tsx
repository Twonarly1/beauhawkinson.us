export function MobileSocialLink({
    icon: Icon,
    href,
    tooltip,
    onClick,
    ...props
}: SocialLinkProps) {
    return (
        <a
            onClick={() => onClick?.()}
            rel="noopener noreferrer"
            className="z-20 flex items-center space-x-1 rounded-lg py-1 hover:bg-pink-100 hover:text-black"
            target="_blank"
            href={href}
            {...props}
        >
            <Icon className="hover:animate-wiggle h-[38px] w-[38px] rounded-full p-2 hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />

            <p className="mr-2">{tooltip}</p>
        </a>
    )
}
