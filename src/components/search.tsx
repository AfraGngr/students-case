'use client'

import { SubmitHandler, useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const SearchSchema = z.object({
    search: z.string().regex(/^[A-Za-z]+$/, "Search input should only include letters")
})

type SearchType = z.infer<typeof SearchSchema>
export default function Search() {
    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SearchType>({ resolver: zodResolver(SearchSchema)})

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter()

    const submitForm: SubmitHandler<SearchType> = (data) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        params.set('q', data.search)
        router.push(`${pathname}?${params.toString()}`);
    }

    const addNewStudent = () => {
        
    }


    return <div className="w-full flex justify-between items-center">
        <div>{"Student's Table"}</div>
        <div className="w-1/3 justify-around flex p-2">
        <form onSubmit={handleSubmit(submitForm)}>
            <input 
                defaultValue={searchParams.get('q') || ''}
                type="text"
                id="name"
                placeholder="Search..." 
                className="border rounded-md h-full focus:border-gray-300 focus:border-1 focus:outline-none "
                {...register("search")}
            />
        </form>
            <button className="bg-orange-400 p-2 w-1/2 border text-gray-50 rounded">+ Add New Student</button>
        </div>
    </div>
}