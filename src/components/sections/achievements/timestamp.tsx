import dayjs from "dayjs"
import clsx from "clsx"
import { config } from "src/lib/config"

interface TimestampProps {
    date: Date
    endDate?: Date
    className?: string
}

export const Timestamp: React.FC<TimestampProps> = ({ date, endDate, className }) => {
    const day = dayjs(date)
    const current = endDate && dayjs().isBefore(endDate)
    const endDay = dayjs(current ? new Date() : endDate)

    const hasEndDate = endDate && endDay.isValid()

    const age = day.diff(config.birthday, "year")

    const relevantDate = hasEndDate ? endDay : day
    const info = hasEndDate ? endDay.diff(day, "month") : age
    const suffix = hasEndDate ? "months" : "y/o"

    return (
        <div
            className={clsx(
                "group relative flex h-6 w-20 cursor-default items-center py-6 md:w-24",
                className,
            )}
        >
            <div
                className={clsx(
                    "absolute -translate-y-8 transform opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
                    "transition-all duration-200 ease-in-out",
                )}
            >
                <span>{info}</span> <span className="text-gray-200">{suffix}</span>
            </div>
            <br />
            <div
                className={clsx(
                    "absolute transform group-hover:translate-y-8",
                    "opacity-100 transition-all duration-200 ease-in-out group-hover:opacity-0",
                )}
            >
                <span className="text-gray-200">
                    {current ? "Now" : relevantDate.format("MMM")}
                </span>{" "}
                <span className="transform group-hover:translate-x-3">
                    {!current && relevantDate.format("YYYY")}
                </span>
            </div>
        </div>
    )
}
