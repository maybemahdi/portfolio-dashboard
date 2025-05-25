/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MyFormCheckbox from "@/components/ui/core/MyForm/MyFormCheckbox/MyFormCheckbox";
import MyFormInput from "@/components/ui/core/MyForm/MyFormInput/MyFormInput";
import MyFormWrapper from "@/components/ui/core/MyForm/MyFormWrapper/MyFormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { z } from "zod";

const validationSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email address"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password must be at least 8 characters long"),
});

export default function LoginForm() {
  const handleSubmit = async (formData: any, reset: any) => {
    console.log(formData);
  };
  return (
    <div className="min-h-[calc(100vh-57px)] flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg space-y-8 p-6">
        <div className="text-center space-y-2">
          <h1 className="text-xl md:text-3xl font-bold tracking-tight text-navy-900">
            Log in to your account
          </h1>
          <p className="text-gray-600">
            Welcome back! Please enter your details.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <MyFormWrapper
            onSubmit={handleSubmit}
            resolver={zodResolver(validationSchema)}
            className="flex flex-col gap-5 mb-5"
          >
            <div className="w-full">
              <MyFormInput
                name={"email"}
                label="Email"
                placeHolder="Enter your email"
              />
            </div>
            <div className="w-full">
              <MyFormInput
                name={"password"}
                label="Password"
                placeHolder="Enter your Password"
                type="password"
              />
            </div>
            <div className="w-full flex items-center justify-between">
              <MyFormCheckbox name="remember" label="Remember for 30 days" />
              <p className="text-blue-500 cursor-pointer">Forgot password</p>
            </div>
            <button
              className="px-4 py-2 bg-blue-primary text-white rounded-lg hover:bg-green-primary/90 transition-colors"
              type="submit"
              // onClick={() => setIsReply(false)}
            >
              Sign in
            </button>
          </MyFormWrapper>
        </div>

        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?
          <Link
            href="/register"
            className="font-medium text-blue-600 hover:text-blue-500 ms-1"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
