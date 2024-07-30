"use client";

import { Session } from "next-auth";
import SearchChatSection from "./SearchChatSection";
import useChat from "../hooks/useChat";
import React from "react";
import UserChatSection from "../user-chat/UserChatSection";

interface ChatSectionProps {
  session: Session;
}

const ChatSection = ({ session }: ChatSectionProps) => {
  const { conversationsQuery, setSearch, searchConversationsQuery } = useChat();

  const conversations = conversationsQuery.data ?? [];

  const searchedConversations = React.useMemo(() => {
    return searchConversationsQuery.data?.length
      ? searchConversationsQuery.data.filter((searchedConversation) =>
          conversations.some(
            (conversation) => searchedConversation.id === conversation.id,
          ),
        )
      : conversations;
  }, [conversations, searchConversationsQuery.data]);

  const loadingList =
    conversationsQuery.isLoading || searchConversationsQuery.isLoading;

  return (
    <>
      <SearchChatSection
        loadingList={loadingList}
        setSearch={setSearch}
        conversations={searchedConversations}
        currentUser={session}
      />
      <UserChatSection />
    </>
  );
};

export default ChatSection;
