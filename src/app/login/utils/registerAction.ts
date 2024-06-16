"use server";

import { db } from "@/lib/db";
import { loginSchema, registerSchema } from "@/schemas";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { AxiosError } from "axios";

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
    });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data);
    }

    throw Error("Invalid Data");
  }
};

export const register = async (data: z.infer<typeof registerSchema>) => {
  const validatedData = registerSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      error: validatedData.error,
    };
  }

  const { name, email, password } = validatedData.data;

  const existUser = await db.user.findFirst({
    where: {
      OR: [
        {
          email,
        },
        {
          name,
        },
      ],
    },
  });

  if (existUser) {
    throw new Error("User with this email or name already exists");
  }

  await db.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return {
    success: "Success register",
  };
};
