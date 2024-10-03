import { getCurrentUser } from "@/actions/getCurrentUserAction";
import { db } from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();

    const { message, image, conversationId } = body;

    const existingMessages = await db.message.count({
      where: {
        conversationId: conversationId,
      },
    });

    const newMessage = await db.message.create({
      data: {
        body: message,
        image: image,
        Conversation: {
          connect: {
            id: conversationId,
          },
        },

        sender: {
          connect: {
            id: currentUser.id,
          },
        },

        seen: {
          connect: {
            id: currentUser.id,
          },
        },
      },

      include: {
        sender: true,
        seen: true,
      },
    });

    const updateConversation = await db.conversation.update({
      where: {
        id: conversationId,
      },

      data: {
        lastMessageAt: new Date(),
        messages: {
          connect: {
            id: newMessage.id,
          },
        },
      },

      include: {
        users: true,
        messages: {
          include: {
            seen: true,
          },
        },
      },
    });

    const conversation = await db.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        users: true,
        messages: {
          include: { seen: true },
        },
      },
    });

    await pusherServer.trigger(conversationId, "messages:new", newMessage);

    const lastMessage =
      updateConversation.messages[updateConversation.messages.length - 1];

    if (existingMessages === 0) {
      const conversation = await db.conversation.findUnique({
        where: {
          id: conversationId,
        },
        include: {
          users: true,
          messages: {
            include: { seen: true },
          },
        },
      });

      updateConversation.users.forEach((user) => {
        pusherServer.trigger(user.email!, "conversation:update", conversation);
      });
    } else {
      updateConversation.users.forEach((user) => {
        pusherServer.trigger(user.email!, "conversation:update", {
          id: conversationId,
          messages: [lastMessage],
        });
      });
    }

    return NextResponse.json(newMessage);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
