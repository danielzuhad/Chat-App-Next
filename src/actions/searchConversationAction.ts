"use server";

import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export const searchConversationAction = async (searchQuery: string) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error("You are not logged in");
  }

  const conversations = await db.conversation.findMany({
    orderBy: {
      lastMessageAt: "desc",
    },

    where: {
      users: {
        some: {
          name: {
            contains: searchQuery,
          },
        },
      },
    },

    include: {
      users: true,
    },
  });

  return conversations;
};
