"use server";

import { db } from "@/lib/prisma";

export const getMessages = async (id: string) => {
  try {
    const conversation = await db.message.findMany({
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
