"use client";

import Button from "@/components/ui/core/Button/Button";
import MyButton from "@/components/ui/core/MyButton/MyButton";
import MyFormInput from "@/components/ui/core/MyForm/MyFormInput/MyFormInput";
import MyFormWrapper from "@/components/ui/core/MyForm/MyFormWrapper/MyFormWrapper";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { verifyToken } from "@/utils/verifyToken";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email address"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters long"),
});

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const [loginUser] = useLoginMutation();
  const router = useRouter();

  const handleSubmit = async (data: any, reset: any) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await handleAsyncWithToast(
        async () =>
          loginUser({
            email: loginData.email,
            password: loginData.password,
          }),
        "Logging in..."
      );
      if (response?.data?.success) {
        const user = verifyToken(response?.data?.data?.accessToken);
        dispatch(
          setUser({
            user: user,
            access_token: response?.data?.data?.accessToken,
          })
        );
        toast.success(response?.data?.message);
        router.push("/dashboard");
        reset();
      }
    } catch (error) {
      // console.error("Error:", error);
      toast.error("An unexpected error occurred");
    }
  };
  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center text-text-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl text-blue-600 font-bold">Sign in</h2>

        <MyFormWrapper
          resolver={zodResolver(loginSchema)}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <MyFormInput type="email" placeHolder="Email" name="email" />
          <MyFormInput type="password" placeHolder="Password" name="password" />
          {/* <Link href={"/forget-password"}>
            <p className="text-primary text-sm mt-2"> Forget Password?</p>
          </Link> */}
          <MyButton type="submit" label="Login" fullWidth />
        </MyFormWrapper>
      </div>
    </div>
  );
}
