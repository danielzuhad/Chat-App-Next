"use client";

import { loginSchema } from "@/schemas";
import { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { z } from "zod";

export const login = async (data: z.infer<typeof loginSchema>) => {
  const validatedData = loginSchema.safeParse(data);

  if (!validatedData.success) {
    throw new Error("Username or password is incorrect");
  }

  const { email, password } = validatedData.data;

  try {
    const response = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
      redirect: false,
    });

    if (response?.error) {
      toast.error("Invalid credentials");
    }

    if (response?.ok) {
      toast.success("Login successful");

      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
      });

      return response;
    }

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data);
    }

    throw Error("Invalid Data");
  }
};
