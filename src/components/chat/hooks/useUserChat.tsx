import { getConversations } from "@/actions/getConversationsAction";
import { searchConversationAction } from "@/actions/searchConversationAction";
import useDebounce from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useUserChat = () => {
  const [search, setSearch] = React.useState<string>("");

  const debouncedSearch = useDebounce(search, 400);

  const searchConversationsQuery = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: async (query) => {
      const response = await searchConversationAction(debouncedSearch);

      return response;
    },
  });

  const conversationsQuery = useQuery({
    queryKey: ["conversations"],
    queryFn: async () => {
      const response = await getConversations();
      return response;
    },
  });

  return { conversationsQuery };
};

export default useUserChat;
