import LoadingUserList from "../../box/Loading/LoadingUserList";
import { Session } from "next-auth";
import { ConversationWithRelationsType } from "@/type/type";
import UserBox from "../../box/UserBox";
import useChat from "../hooks/useChat";

interface ChatListProps {
  conversations: ConversationWithRelationsType[];
  currentUser: Session;
  loadingList: boolean;
}

const ChatList = ({
  conversations,
  currentUser,
  loadingList,
}: ChatListProps) => {
  const { conversationId, handleSetConversationId } = useChat();

  return (
    <>
      <div className="flex h-[80vh] w-full flex-col overflow-auto sm:h-full">
        {loadingList ? (
          <div className="w-full sm:px-[1px] md:px-1">
            <LoadingUserList variant={"Chats"} />
          </div>
        ) : (
          conversations.map((conversation, i) => (
            <UserBox
              onClick={() => handleSetConversationId(conversation.id)}
              key={i}
              className={`${conversationId === conversation.id && "bg-card-hover"} `}
              user={conversation.users.find(
                (user) => user.name !== currentUser.user?.name,
              )}
              classNameImage="bg-black/50"
              showLastMessage={false}
              showEmail={true}
            />
          ))
        )}
      </div>
    </>
  );
};

export default ChatList;
