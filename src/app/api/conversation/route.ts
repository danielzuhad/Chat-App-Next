import { getCurrentUser } from "@/actions/getCurrentUserAction";
import { db } from "@/lib/db";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

export interface ConversationBodyType {
  userId: string;
  isGroup: boolean;
  name: string;
  members: User[];
}

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();

    const { userId, isGroup, name, members } = body;

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (isGroup && (!members || members.length < 2)) {
      return new NextResponse("Please select at least 2 members", {
        status: 400,
      });
    }

    if (isGroup) {
      const newConversation = await db.conversation.create({
        data: {
          name,
          isGroup,
          users: {
            connect: [
              ...members.map((member: User) => ({
                id: member.id,
              })),
              {
                id: currentUser.id,
              },
            ],
          },
        },
        include: {
          users: true,
        },
      });

      return new NextResponse(JSON.stringify(newConversation), {
        status: 201,
      });
    }

    // Handling for personal conversation (non-group)
    const existingConversation = await db.conversation.findFirst({
      where: {
        AND: [
          {
            isGroup: false,
          },
          {
            users: {
              some: {
                id: currentUser.id,
              },
            },
          },
          {
            users: {
              some: {
                id: userId,
              },
            },
          },
        ],
      },
      include: {
        users: true,
      },
    });

    if (existingConversation) {
      return new NextResponse(
        JSON.stringify({
          data: existingConversation,
          message: "Conversation already exists",
          available: true,
        }),
        { status: 200 },
      );
    }

    const newConversation = await db.conversation.create({
      data: {
        name,
        isGroup,
        users: {
          connect: [
            {
              id: currentUser.id,
            },
            {
              id: userId,
            },
          ],
        },
      },
      include: {
        users: true,
      },
    });

    return new NextResponse(
      JSON.stringify({
        data: newConversation,
        message: "Conversation has created",
        available: false,
      }),
      {
        status: 201,
      },
    );
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
