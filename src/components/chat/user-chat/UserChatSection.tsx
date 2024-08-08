import { RootState } from "@/redux/store/store";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import BlankChat from "./BlankChat";
import UserChat from "./UserChat";
import { User } from "@prisma/client";

export interface UserChatSectionProps {
  currentuser: User;
}

const UserChatSection = ({ currentuser }: UserChatSectionProps) => {
  const conversation = useSelector(
    (state: RootState) => state.chat.conversation,
  );

  const anotherUser = useMemo(() => {
    return conversation?.users.find((user) => user.id !== currentuser?.id);
  }, [conversation]);

  return (
    <div className="h-full w-full rounded-[6px] border-[1px]">
      {conversation ? (
        <UserChat
          conversation={conversation}
          currentUser={anotherUser as User}
        />
      ) : (
        <BlankChat />
      )}
    </div>
  );
};

export default UserChatSection;
