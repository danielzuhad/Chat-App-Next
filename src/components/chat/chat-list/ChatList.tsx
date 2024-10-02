import React, { useEffect, useState } from "react";
import LoadingUserList from "../../box/Loading/LoadingUserList";
import { ConversationWithRelationsType } from "@/type/type";
import UserBox from "../../box/UserBox";
import { useDispatch, useSelector } from "react-redux";
import { setConversation } from "@/redux/features/chat/chatSlice";
import { RootState } from "@/redux/store/store";
import { User } from "@prisma/client";
import { pusherClient } from "@/lib/pusher";

interface ChatListProps {
  conversations: ConversationWithRelationsType[];
  currentUser: User;
  loadingList: boolean;
  conversationState: ConversationWithRelationsType | null;
}

const ChatList = React.memo(
  ({
    conversations: dataConversations,
    currentUser,
    loadingList,
    conversationState,
  }: ChatListProps) => {
    const [conversations, setConversations] = useState<
      ConversationWithRelationsType[]
    >([]);

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

    useEffect(() => {
      if (dataConversations) {
        setConversations(dataConversations);
      }
    }, [dataConversations]);

    useEffect(() => {
      if (!currentUser.email) {
        return;
      }

      pusherClient.subscribe(currentUser.email);

      const conversationHandler = (
        conversation: ConversationWithRelationsType,
      ) => {
        setConversations((prev) => {
          const conversationExists = prev.some(
            (existingConversation) =>
              existingConversation.id === conversation.id,
          );

          if (conversationExists) {
            return prev;
          }

          return [...prev, conversation];
        });
      };

      pusherClient.bind("conversation:update", conversationHandler);

      return () => {
        pusherClient.unsubscribe(currentUser.email!);
        pusherClient.unbind("conversation:update", conversationHandler);
      };
    }, [currentUser.email]);

    return (
      <>
        <div className="flex h-[80vh] w-full flex-col overflow-auto sm:h-full">
          {loadingList ? (
            <div className="w-full sm:px-[1px] md:px-1">
              <LoadingUserList variant={"Chats"} />
            </div>
          ) : (
            conversations.map((conversation, i) => {
              const user = Array.isArray(conversation.users)
                ? conversation.users.find(
                    (user) => user.name !== currentUser.name,
                  )
                : null;

              // If user is not found, handle it properly
              if (!user) {
                return null; // Skip rendering if no user is found
              }

              return (
                <UserBox
                  onClick={() => handleSetConversationId(conversation)}
                  key={i}
                  className={`${
                    conversationState?.id === conversation.id && "bg-card-hover"
                  } `}
                  user={user}
                  classNameImage="bg-black/10 sm:w-10 max-md:h-10 "
                  showLastMessage={false}
                  showEmail={true}
                />
              );
            })
          )}

          {conversations.length === 0 && !loadingList && (
            <p className="flex h-full w-full items-center justify-center text-center font-normal text-primary/50 max-sm:hidden">
              Search a friend in Friends section
            </p>
          )}
        </div>
      </>
    );
  },
);

ChatList.displayName = "ChatList";

export default ChatList;
