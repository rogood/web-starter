import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { ParsedUrlQuery } from 'querystring'

const useRouterParams = (): ParsedUrlQuery => {
    const router = useRouter()
    const [query, setQuery] = useState(null)
    useEffect(() => {
        if (router && router.query) {
            setQuery(router.query)
        }
    }, [router])

    return query
}

export default useRouterParams
