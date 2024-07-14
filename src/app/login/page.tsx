"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const SignInSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Please enter a valid email" }),
  password: z.string().min(8, { message: "Password must be at least 8 char" }),
});

type SignInSchemaType = z.infer<typeof SignInSchema>;

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });

  const submitForm: SubmitHandler<SignInSchemaType> = (data) => {
    console.log(data);
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">MANAGE COURSES</h2>
        <p className="text-center text-gray-600 mb-8">
          Enter your credentials to access your account
        </p>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="string"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            SIGN IN
          </button>
          <div className="text-center mt-4">
            <a href="#">
              <span className="text-yellow-400 hover:text-yellow-600 transition duration-300">
                Forgot your password?{" "}
              </span>
              <span className="text-yellow-600 hover:underline">
                Reset Password
              </span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
