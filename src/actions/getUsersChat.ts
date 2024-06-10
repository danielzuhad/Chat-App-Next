import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export const getUsersChat = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user?.email) {
    return [];
  }

  try {
    const users = await prisma?.user.findMany({
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
    return [];
  }
};
