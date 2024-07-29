"use client";

import { Session } from "next-auth";
import useUserChat from "./hooks/useUserChat";
import SearchChatSection from "./SearchChatSection";

interface ChatSectionProps {
  session: Session;
}

const ChatSection = ({ session }: ChatSectionProps) => {
  const { conversationsQuery, setSearch, searchConversationsQuery } =
    useUserChat();

  const conversations = conversationsQuery.data ?? [];

  const loadingList = conversationsQuery.isLoading;

  return (
    <>
      <SearchChatSection
        loadingList={loadingList}
        setSearch={setSearch}
        conversations={conversations}
        currentUser={session}
      />
      <div className="h-full w-full border-[1px]">Messages</div>
    </>
  );
};

export default ChatSection;
