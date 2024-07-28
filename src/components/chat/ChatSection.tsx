"use client";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import useUserChat from "./hooks/useUserChat";
import SearchChatSection from "./SearchChatSection";

interface ChatSectionProps {}

const ChatSection = async ({}: ChatSectionProps) => {
  const { conversationsQuery } = useUserChat();

  const conversations = conversationsQuery.data ?? [];
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <SearchChatSection
        conversations={conversations}
        currentUser={getCurrentUser}
      />
      <div className="h-full w-full border-[1px]">Messages</div>
    </>
  );
};

export default ChatSection;
