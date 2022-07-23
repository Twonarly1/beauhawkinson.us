import { Headings } from '../../typings'

export default function Heading({ title, subtitle, legend }: Headings) {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="cursor-default text-4xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      <div className="mt-1 cursor-default text-2xl ">{subtitle}</div>
      <p className="text-xs text-pink-400">{legend}</p>
    </div>
  )
}
