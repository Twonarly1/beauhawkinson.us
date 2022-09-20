import { PageInfo } from "../../../typings"

const fetchPageInfo = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
    // check res for error
    if (!res.ok) {
        console.log(res.statusText)
    }
    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo
    return pageInfo
}

export default fetchPageInfo
