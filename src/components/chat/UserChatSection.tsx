"use client";

import { Conversation } from "@prisma/client";
import SearchChatSection from "./SearchChatSection";
import { Session } from "next-auth";

interface UserChatSectionProps {
  conversations: Conversation[];
  currentUser: Session;
}

const UserChatSection = ({
  conversations,
  currentUser,
}: UserChatSectionProps) => {
  return (
    <>
      <SearchChatSection
        conversations={conversations}
        currentUser={currentUser}
      />
      <div className="h-full w-full border-[1px]">Messages</div>
    </>
  );
};

export default UserChatSection;
