import ChatSection from "@/components/chat/ChatSection";
import LayoutWrapper from "@/layout/LayoutWrapper";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <LayoutWrapper className="h-full flex-row sm:h-full">
        <ChatSection session={session} />
      </LayoutWrapper>
    </>
  );
}
