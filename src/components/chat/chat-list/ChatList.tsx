import React from "react";
import LoadingUserList from "../../box/Loading/LoadingUserList";
import { Session } from "next-auth";
import { ConversationWithRelationsType } from "@/type/type";
import UserBox from "../../box/UserBox";
import { useDispatch, useSelector } from "react-redux";
import { setConversation } from "@/redux/features/chat/chatSlice";
import useChat from "../hooks/useChat";
import { RootState } from "@/redux/store/store";

interface ChatListProps {
  conversations: ConversationWithRelationsType[];
  currentUser: Session;
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
    const { getConversationByIdMutation } = useChat();

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
          getConversationByIdMutation.mutate(conversation?.id);
        }
      },
      [conversationId, dispatch, getConversationByIdMutation],
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
                  (user) => user.name !== currentUser.user?.name,
                )}
                classNameImage="bg-black/10 sm:w-10 max-md:h-10 "
                showLastMessage={true}
                showEmail={false}
              />
            ))
          )}
        </div>
      </>
    );
  },
);

export default ChatList;
