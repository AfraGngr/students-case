"use client";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Student, StudentSchema } from "./addNewStudentModal";
import { useToast } from "./ui/use-toast";

interface DeleteStudentModal {
  id: number;
}
export function DeleteStudentModal({ id }: DeleteStudentModal) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const form = useForm<Student>({ resolver: zodResolver(StudentSchema) });
  const { toast } = useToast();

  const submit = async () => {
    try {
      const config = {
        method: "DELETE",
        url: `https://dummyjson.com/users/${id}`,
      };

      await axios(config);
      setIsModalOpen(false);
      toast({
        title: "Student was deleted successfully !",
        className: "bg-gray-100 text-green-600",
      });
    } catch (err: any) {
      toast({
        title: "An error occured while deleting the student.",
        className: "bg-gray-100 text-rose-600",
      });
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger>
        <FontAwesomeIcon color="red" icon={faTrash} />
      </DialogTrigger>
      <DialogContent className="bg-gray-200">
        <DialogHeader>
          <DialogDescription>
            Are you sure to delete this student ?
          </DialogDescription>
          <div className="flex justify-end">
            <Button
              className="text-red-600 mr-2"
              onClick={() => setIsModalOpen(false)}
            >
              No
            </Button>
            <Button onClick={submit} className="bg-orange-400 text-gray-50">
              Yes
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}