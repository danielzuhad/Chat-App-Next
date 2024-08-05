import { RootState } from "@/redux/store/store";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import BlankChat from "./BlankChat";
import UserChat from "./UserChat";
import { Session } from "next-auth";

export interface UserChatSectionProps {
  currentuser: Session;
}

const UserChatSection = ({ currentuser }: UserChatSectionProps) => {
  const conversation = useSelector(
    (state: RootState) => state.chat.conversation,
  );

  const anotherUser = useMemo(() => {
    return conversation?.users.find(
      (user) => user.name !== currentuser?.user?.name,
    );
  }, [conversation]);

  return (
    <div className="h-full w-full rounded-[6px] border-[1px] p-2">
      {conversation ? (
        <UserChat
          conversation={conversation}
          user={anotherUser ? anotherUser : null}
        />
      ) : (
        <BlankChat />
      )}
    </div>
  );
};

export default UserChatSection;
