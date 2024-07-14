import Pagination from "@/components/pagination"
import Search from "@/components/search"
import StudentsTable from "@/components/studentsTable"
import axios, { AxiosRequestConfig } from "axios"

interface SearchParams {
    searchParams?: {
        page?: string
        query?: string
    }
}

export default async function Students ({ searchParams }: SearchParams) {
    const limit : number = 6
    const page: number = Number(searchParams?.page) || 1
    const query: string = searchParams?.query || ''


    const config: AxiosRequestConfig = { 
            method : 'GET',
            url: 'https://dummyjson.com/users',
            params: {
                limit,
                skip : (page - 1) * limit
            }, 
    }

    const { data } = await axios<GetStudentResponse>(config)
    console.log(data)
    const total = data.total

    return <div className="flex flex-col justify-between">
        <Search />
        <StudentsTable data={data.users} />
        <Pagination total={total} />
    </div>
    
    
}