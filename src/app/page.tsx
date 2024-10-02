import { getCurrentUser } from "@/actions/getCurrentUserAction";
import ChatSection from "@/components/chat/chat-list/ChatSection";
import LayoutWrapper from "@/layout/LayoutWrapper";
import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  return (
    <LayoutWrapper className="h-full flex-row sm:h-full">
      <ChatSection currentUser={currentUser} />
    </LayoutWrapper>
  );
}
