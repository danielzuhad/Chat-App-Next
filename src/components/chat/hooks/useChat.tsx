import { getConversations } from "@/actions/getConversationsAction";
import { searchConversationAction } from "@/actions/searchConversationAction";
import useDebounce from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useChat = () => {
  const [search, setSearch] = React.useState<string>("");

  const debouncedSearch = useDebounce(search, 400);

  const searchConversationsQuery = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: async () => {
      if (!debouncedSearch) {
        return [];
      }

      const response = await searchConversationAction(debouncedSearch);
      console.log({ response });
      return response;
    },

    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled: !!debouncedSearch,
  });

  const conversationsQuery = useQuery({
    queryKey: ["conversations"],
    queryFn: async () => {
      const response = await getConversations();
      return response;
    },

    refetchOnWindowFocus: false,
  });

  return { conversationsQuery, searchConversationsQuery, setSearch };
};

export default useChat;
