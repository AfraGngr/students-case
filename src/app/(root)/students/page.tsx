import Pagination from "@/components/pagination"
import Search from "@/components/search"
import StudentsTable from "@/components/studentsTable"
import axios, { AxiosRequestConfig } from "axios"
import { Suspense } from "react"

interface SearchParams {
    searchParams?: {
        page?: string
        q?: string
    }
}

export default async function Students ({ searchParams }: SearchParams) {
    const limit : number = 6
    const page: number = Number(searchParams?.page) || 1
    const q: string = searchParams?.q || ''
    const skip: number =  (page - 1) * limit

    const config: AxiosRequestConfig = { 
        method : 'GET',
        url: 'https://dummyjson.com/users/search',
        params: {
            limit,
            skip,
            q,
        }, 
    }
    
    const { data } = await axios<GetStudentResponse>(config)
    const total = data.total

    return <div className="flex p-5 flex-col gap-2 justify-between">
        <Search />
        <Suspense fallback={'loading'}>
            <StudentsTable data={data.users} />
            <Pagination total={total} limit={data.limit} skip={data.skip}/>
        </Suspense>
    </div>
    
    
}