/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { logout, selectCurrentToken } from "@/redux/features/auth/authSlice";
import Loading from "@/components/ui/core/Loading/Loading";

const WithAdmin = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true); // Loading state
  const token = useAppSelector(selectCurrentToken); // Check for token
  const user: any | null = token ? verifyToken(token) : null;

  useEffect(() => {
    if (!token) {
      dispatch(logout());
      router.replace("/auth/login"); // Redirect if not authenticated
    } else if (user && user.role !== "ADMIN") {
      dispatch(logout());
      router.replace("/auth/login");
    } else {
      setLoading(false); // Stop loading once authenticated
    }
  }, [router, token, user, dispatch]);

  if (loading) {
    return <Loading />;
  }

  return children; // Render the children if authenticated
};

export default WithAdmin;