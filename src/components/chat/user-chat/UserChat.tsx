import BodyChat from "./BodyChat";
import FormChat from "./FormChat";
import { ConversationWithRelationsType } from "@/type/type";
import { User } from "@prisma/client";
import useMessage from "../hooks/useMessage";
import HeaderChat from "./HeaderChat";

interface UserChatProps {
  currentUser: User;
  conversation: ConversationWithRelationsType | null;
}

const UserChat = ({ currentUser, conversation }: UserChatProps) => {
  const { form, onSubmit, handleUpload, submitMutation } = useMessage(
    conversation?.id as string,
  );
  return (
    <div className="relative h-full w-full">
      <HeaderChat user={currentUser} />

      <div className="flex h-full w-full flex-col justify-between">
        <BodyChat
          submitMutation={submitMutation}
          currentuser={currentUser}
          conversationId={conversation?.id as string}
        />
        <FormChat form={form} handleUpload={handleUpload} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default UserChat;
