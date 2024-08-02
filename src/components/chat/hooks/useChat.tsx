import { getConversationById } from "@/actions/getConversationByIdAction";
import { setConversation } from "@/redux/features/chat/chatSlice";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useDispatch } from "react-redux";

const useChat = (conversationId: string | null) => {
  const dispatch = useDispatch();

  const handleSetConversationId = React.useCallback(
    (conversationId: string) => {
      dispatch(setConversation(conversationId));
    },
    [dispatch],
  );

  // fetch conversations by id
  const conversationByIdQuery = useQuery({
    queryKey: ["conversationById", conversationId],
    queryFn: async () => {
      if (!conversationId) {
        return null;
      }

      const response = await getConversationById(conversationId);
      return response;
    },

    enabled: !!conversationId,
    refetchOnWindowFocus: false,
  });

  return React.useMemo(
    () => ({
      conversationId,
      handleSetConversationId,
      conversationByIdQuery,
    }),
    [conversationId, handleSetConversationId, conversationByIdQuery],
  );
};

export default useChat;
