import { User } from "next-auth";
import HeaderChat from "./HeaderChat";
import BodyChat from "./BodyChat";
import FormChat from "./FormChat";
import { ConversationWithRelationsType } from "@/type/type";

interface UserChatProps {
  user: User | null;
  conversation: ConversationWithRelationsType | null;
}

const UserChat = ({ user, conversation }: UserChatProps) => {
  return (
    <>
      <div className="relative h-full w-full">
        <HeaderChat user={user} />

        <div className="flex h-full w-full flex-col justify-between">
          <BodyChat />
          <FormChat conversationId={conversation?.id as string} />
        </div>
      </div>
    </>
  );
};

export default UserChat;
