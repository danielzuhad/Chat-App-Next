"use server";

import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

export const searchConversationAction = async (searchQuery: string) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error("You are not logged in");
  }

  const conversations = await db.conversation.findMany({
    where: {
      users: {
        some: {
          name: {
            contains: searchQuery,
            mode: "insensitive",
          },
        },
      },

      NOT: {
        users: {
          some: {
            email: session.user.email,
          },
        },
      },
    },

    include: {
      users: true,
      messages: {
        include: {
          sender: true,
          seen: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return conversations;
};
