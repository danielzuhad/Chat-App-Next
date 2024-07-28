"use server";

import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

export const searchUsers = async (searchQuery: string) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error("You are not logged in");
  }

  const users = await db.user.findMany({
    where: {
      name: {
        contains: searchQuery,
      },
      email: {
        not: session.user.email,
      },
    },
  });

  if (!users) {
    throw new Error("No users found");
  }

  return users;
};
