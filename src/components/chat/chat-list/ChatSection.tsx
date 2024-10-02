"use client";

import { User } from "@prisma/client";
import UserChatSection from "../user-chat/UserChatSection";
import SearchChatSection from "./SearchChatSection";

interface ChatSectionProps {
  currentUser: User;
}

const ChatSection = ({ currentUser }: ChatSectionProps) => {
  return (
    <div className="flex h-full w-full">
      <SearchChatSection currentUser={currentUser} />

      <UserChatSection currentuser={currentUser} />
    </div>
  );
};

export default ChatSection;
