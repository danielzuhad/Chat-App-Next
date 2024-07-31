"use server";

import { db } from "@/lib/db";

export const getConversationById = async (id: string) => {
  try {
    const conversation = await db.message.findFirst({
      where: {
        conversationId: id,
      },

      include: {
        sender: true,
        seen: true,
      },

      orderBy: {
        createdAt: "asc",
      },
    });

    return conversation;
  } catch (error) {
    console.log(error);
  }
};
