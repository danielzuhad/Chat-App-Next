"use client";

import { Session } from "next-auth";
import UserChatSection from "../user-chat/UserChatSection";
import SearchChatSection from "./SearchChatSection";

interface ChatSectionProps {
  session: Session;
}

const ChatSection = ({ session }: ChatSectionProps) => {
  return (
    <>
      {/* <SearchChatSection currentUser={session} /> */}

      <SearchChatSection currentUser={session} />

      <UserChatSection />
    </>
  );
};

export default ChatSection;
