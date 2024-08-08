"use server";

import { db } from "@/lib/prisma";
import { getCurrentUser } from "./getCurrentUserAction";

export const getConversations = async () => {
  const currentUser = await getCurrentUser();

  try {
    const conversations = await db.conversation.findMany({
      orderBy: {
        lastMessageAt: "desc",
      },

      where: {
        userIds: {
          hasSome: [currentUser.id],
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
  } catch (error) {
    return [];
  }
};
