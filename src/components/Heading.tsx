type Headings = {
    title?: string
    subtitle?: string
    other?: string
}

export default function Heading({ title, subtitle, other }: Headings) {
    return (
        <div className="text-center">
            <h1 className="cursor-default text-4xl font-bold text-gray-900 dark:text-gray-100">
                {title}
            </h1>
            <div className="text-md mt-1 cursor-default xs:text-2xl ">{subtitle}</div>
            <p className="text-xs text-pink-400">{other}</p>
        </div>
    )
}
