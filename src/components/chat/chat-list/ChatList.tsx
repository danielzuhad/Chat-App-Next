import LoadingUserList from "../../box/Loading/LoadingUserList";
import { Session } from "next-auth";
import { ConversationWithRelations } from "@/type/type";
import UserBox from "../../box/UserBox";

interface ChatListProps {
  conversations: ConversationWithRelations[];
  currentUser: Session;
  loadingList: boolean;
}

const ChatList = ({
  conversations,
  currentUser,
  loadingList,
}: ChatListProps) => {
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
              key={i}
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
