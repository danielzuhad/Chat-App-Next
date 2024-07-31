import { getConversationById } from "@/actions/getConversationByIdAction";
import { getConversations } from "@/actions/getConversationsAction";
import { searchConversationAction } from "@/actions/searchConversationAction";
import useDebounce from "@/hooks/useDebounce";
import { setConversation } from "@/redux/features/chat/chatSlice";
import { RootState } from "@/redux/store/store";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const useChat = () => {
  const [search, setSearch] = React.useState<string>("");

  const dispatch = useDispatch();

  const debouncedSearch = useDebounce(search, 400);

  const conversationId = useSelector(
    (state: RootState) => state.chat.conversationId,
  );

  const memorizedConversationId = React.useMemo(
    () => conversationId,
    [conversationId],
  );

  const handleSetConversationId = React.useCallback(
    (conversationId: string) => {
      dispatch(setConversation(conversationId));
    },
    [dispatch],
  );

  // Search Conversations
  const searchConversationsQuery = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: async () => {
      if (!debouncedSearch) {
        return [];
      }

      const response = await searchConversationAction(debouncedSearch);
      return response;
    },

    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled: !!debouncedSearch,
  });

  // fetch all conversations
  const conversationsQuery = useQuery({
    queryKey: ["conversations"],
    queryFn: async () => {
      const response = await getConversations();
      return response;
    },

    refetchOnWindowFocus: false,
  });

  // fetch conversations by id
  const conversationByIdQuery = useQuery({
    queryKey: ["conversationById", memorizedConversationId],
    queryFn: async () => {
      if (!memorizedConversationId) {
        return null;
      }

      const response = await getConversationById(memorizedConversationId);
      console.log({ response });
      return response;
    },

    enabled: !!memorizedConversationId,
    refetchOnWindowFocus: false,
  });

  return {
    conversationsQuery,
    searchConversationsQuery,
    setSearch,
    conversationId,
    handleSetConversationId,
    conversationByIdQuery,
  };
};

export default useChat;
