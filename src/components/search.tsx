"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { AddNewStudentModal } from "./addNewStudentModal";

const SearchSchema = z.object({
  search: z
    .string()
    .regex(/^[A-Za-z]+$/, "Search input should only include letters"),
});

type SearchType = z.infer<typeof SearchSchema>;
export default function Search() {
  const form = useForm<SearchType>({ resolver: zodResolver(SearchSchema) });

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const submitForm: SubmitHandler<SearchType> = (data) => {
    console.log(data);
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    params.set("q", data.search);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full flex justify-between items-center">
      <div>{"Student's Table"}</div>
      <div className="w-1/3 justify-around flex p-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Search.." {...field} />
                  </FormControl>
                  <FormMessage className="text-rose-500 text-xs" />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <AddNewStudentModal />
      </div>
    </div>
  );
}
