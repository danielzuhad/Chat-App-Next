import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  const currentUser = await db.user.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  return currentUser;
};
