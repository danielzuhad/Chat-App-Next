import { getConversations } from "@/actions/getConversationsAction";
import { searchConversationAction } from "@/actions/searchConversationAction";
import useDebounce from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

const useSearchChat = (conversationId: string | null) => {
  const [search, setSearch] = useState<string>("");

  const debouncedSearch = useDebounce(search, 400);

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

    refetchOnMount: conversationId ? true : false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const conversations = conversationsQuery.data ?? [];

  const searchedConversations = useMemo(() => {
    return searchConversationsQuery.data?.length
      ? searchConversationsQuery.data.filter((searchedConversation) =>
          conversations.some(
            (conversation) => searchedConversation.id === conversation.id,
          ),
        )
      : conversations;
  }, [conversations, searchConversationsQuery.data]);

  const loadingList =
    conversationsQuery.isLoading || searchConversationsQuery.isLoading;

  return useMemo(
    () => ({
      setSearch,
      searchedConversations,
      loadingList,
    }),
    [setSearch, searchedConversations, loadingList],
  );
};

export default useSearchChat;
