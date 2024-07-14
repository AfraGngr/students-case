'use client'

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { use, useEffect, useState } from "react"

interface PaginationProps {
    total: number;
    limit: number;
    skip:number;
}
export default function Pagination ({ total, limit, skip } : PaginationProps)  {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    const router = useRouter()


    const createUrlSearchParam = (value: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', (currentPage + value).toString());
        router.push(`${pathname}?${params.toString()}`);
    }

    return <div className="flex gap-6 items-center justify-end">
        <div className="text-gray-500">{`${skip + 1} - ${currentPage * limit} of ${total}`}</div>
        <FontAwesomeIcon color="gray" onClick={() => createUrlSearchParam(-1)} icon={faChevronLeft} />
        <FontAwesomeIcon color="gray" onClick={() => createUrlSearchParam(1)} icon={faChevronRight} />
    </div>
}


