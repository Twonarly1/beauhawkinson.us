import { Headings } from '../../typings'

export default function Heading({ title, subtitle, legend }: Headings) {
  return (
    <>
      <h1 className="offColorHeading  cursor-default text-4xl font-bold">
        {title}
      </h1>
      <div className="mt-1 cursor-default text-2xl ">{subtitle}</div>
      <p className="text-xs text-pink-400">{legend}</p>
    </>
  )
}
