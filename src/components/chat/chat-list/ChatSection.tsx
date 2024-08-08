"use client";

import { User } from "@prisma/client";
import UserChatSection from "../user-chat/UserChatSection";
import SearchChatSection from "./SearchChatSection";

interface ChatSectionProps {
  currentUser: User;
}

const ChatSection = ({ currentUser }: ChatSectionProps) => {
  return (
    <>
      {/* <SearchChatSection currentUser={session} /> */}

      <SearchChatSection currentUser={currentUser} />

      <UserChatSection currentuser={currentUser} />
    </>
  );
};

export default ChatSection;
