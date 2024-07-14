"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const StudentSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name should be at least 3 char" }),
  lastName: z
    .string()
    .min(2, { message: "Last name should be at least 3 char" }),
  email: z.string().email(),
  phone: z.string(),
});

export type Student = z.infer<typeof StudentSchema>;

export function AddNewStudentModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const form = useForm<Student>({ resolver: zodResolver(StudentSchema) });
  const { toast } = useToast();

  const submitForm = async (data: Student) => {
    try {
      const config = {
        method: "POST",
        url: "https://dummyjson.com/users/add",
        body: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
        },
      };

      await axios(config);
      toast({
        title: "New student added successfully !",
        className: "bg-gray-100 text-green-600",
      });
      setIsModalOpen(false);
      form.reset();
    } catch (err: any) {
      console.log(err);
      toast({
        title: "An error occured while adding new student.",
        className: "bg-gray-100 text-rose-600",
      });
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-400 text-gray-50"
        >
          + Add New Student
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-200">
        <DialogHeader>
          <DialogTitle>Enter User Info</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="First Name.." {...field} />
                  </FormControl>
                  <FormMessage className="text-rose-500 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Last Name.." {...field} />
                  </FormControl>
                  <FormMessage className="text-rose-500 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email.." {...field} />
                  </FormControl>
                  <FormMessage className="text-rose-500 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Phone Number.." {...field} />
                  </FormControl>
                  <FormMessage className="text-rose-500 text-xs" />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-orange-400 text-gray-50">
              Add Student
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
