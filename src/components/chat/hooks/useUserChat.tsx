import { getConversations } from "@/actions/getConversationsAction";
import { searchConversationAction } from "@/actions/searchConversationAction";
import useDebounce from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useUserChat = () => {
  const [search, setSearch] = React.useState<string>("");

  const debouncedSearch = useDebounce(search, 400);

  // console.log({ debouncedSearch });

  const searchConversationsQuery = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: async () => {
      if (debouncedSearch.length >= 3) {
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

  const conversationsQuery = useQuery({
    queryKey: ["conversations"],
    queryFn: async () => {
      const response = await getConversations();
      return response;
    },

    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { conversationsQuery, searchConversationsQuery, setSearch };
};

export default useUserChat;
