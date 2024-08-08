import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export const getUsers = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user?.email) {
    return [];
  }

  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },

      where: {
        NOT: {
          email: session?.user?.email,
        },
      },
    });

    return users;
  } catch (error) {
    console.log({ error });

    return [];
  }
};
