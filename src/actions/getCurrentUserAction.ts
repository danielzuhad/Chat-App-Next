"use server";

import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions);

  const uniqueUser = await db.user.findUnique({
    where: {
      email: session?.user?.email as string,
    },
  });

  if (!uniqueUser) {
    throw new Error("User not found");
  }

  return uniqueUser;
};
