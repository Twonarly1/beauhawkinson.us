export default function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const truncateStr = (fullStr: any, strLen: any) => {
    if (fullStr.length <= strLen) return fullStr
    const seperator = "..."
    const seperatorLength = seperator.length
    const charsToShow = strLen - seperatorLength
    const frontChars = Math.ceil(charsToShow / 2)
    const backChars = Math.ceil(charsToShow / 2)
    return (
        fullStr.substring(0, frontChars) + seperator + fullStr.substring(fullStr.length - backChars)
    )
}
