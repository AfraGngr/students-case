"use client";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { Button } from "@/components/ui/button";

import { Student, StudentSchema } from "./addNewStudentModal";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import axios from "axios";

interface EditStudentProps {
  data: User;
  id: number;
}

export function EditStudentModal({ data, id }: EditStudentProps) {
  const { firstName, lastName, email, phone } = data;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const form = useForm<Student>({ resolver: zodResolver(StudentSchema) });
  const { toast } = useToast();

  const submitForm = async (data: Student) => {
    try {
      const config = {
        method: "PUT",
        url: `https://dummyjson.com/users/${id}`,
        body: data,
      };

      await axios(config);
      setIsModalOpen(false);
      toast({
        title: "Student was edited successfully !",
        className: "bg-gray-100 text-green-600",
      });
    } catch (err: any) {
      toast({
        title: "An error occured while editing the student.",
        className: "bg-gray-100 text-rose-600",
      });
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger>
        <FontAwesomeIcon color="orange" icon={faPenToSquare} />
      </DialogTrigger>
      <DialogContent className="bg-gray-200">
        <DialogHeader>
          <DialogTitle>Edit Student</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstName"
              defaultValue={firstName}
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
              defaultValue={lastName}
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
              defaultValue={email}
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
              defaultValue={phone}
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
              Edit Student
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
