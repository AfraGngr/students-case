'use client'

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { use, useEffect, useState } from "react"

interface PaginationProps {
    total: number
}
export default function Pagination ({ total } : PaginationProps)  {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    const router = useRouter()


    const [page, setPage] = useState<number>(currentPage)

    const createUrlSearchParam = () => {
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        return `${pathname}?${params.toString()}`;
    }

    useEffect(() => {
        const url = createUrlSearchParam()
        router.push(url)
    }, [page])

    return <div className="border-2">
        <FontAwesomeIcon onClick={() => setPage(page - 1)} icon={faChevronLeft} />
        <FontAwesomeIcon onClick={() => setPage(page + 1)} icon={faChevronRight} />
    </div>
}


