import React from "react";
import LoadingUserList from "../../box/Loading/LoadingUserList";
import { ConversationWithRelationsType } from "@/type/type";
import UserBox from "../../box/UserBox";
import { useDispatch, useSelector } from "react-redux";
import { setConversation } from "@/redux/features/chat/chatSlice";
import { RootState } from "@/redux/store/store";
import { User } from "@prisma/client";

interface ChatListProps {
  conversations: ConversationWithRelationsType[];
  currentUser: User;
  loadingList: boolean;
  conversationState: ConversationWithRelationsType | null;
}

const ChatList = React.memo(
  ({
    conversations,
    currentUser,
    loadingList,
    conversationState,
  }: ChatListProps) => {
    const conversationId = useSelector(
      (state: RootState) => state.chat.conversation?.id,
    );

    const dispatch = useDispatch();

    const handleSetConversationId = React.useCallback(
      (conversation: ConversationWithRelationsType) => {
        if (conversationId === conversation.id) {
          return;
        } else {
          dispatch(setConversation(conversation));
        }
      },
      [conversationId, dispatch],
    );

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
                onClick={() => handleSetConversationId(conversation)}
                key={i}
                className={`${conversationState?.id === conversation.id && "bg-card-hover"} `}
                user={conversation.users.find(
                  (user) => user.name !== currentUser.name,
                )}
                classNameImage="bg-black/10 sm:w-10 max-md:h-10 "
                showLastMessage={false}
                showEmail={true}
              />
            ))
          )}
        </div>
      </>
    );
  },
);

ChatList.displayName = "ChatList";

export default ChatList;
