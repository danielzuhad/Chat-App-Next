import React from "react";
import useDebounce from "../../../hooks/useDebounce";
import { useMutation, useQuery } from "@tanstack/react-query";
import { searchUsers } from "@/actions/searchUserAction";
import axios from "axios";
import { ConversationBodyType } from "@/app/api/conversation/route";

const useSearch = () => {
  const [search, setSearch] = React.useState<string>("");

  const debouncedSearch = useDebounce(search, 400);

  const searchQuery = useQuery({
    queryKey: ["search", search],
    queryFn: async () => {
      if (debouncedSearch.length >= 3) {
        return [];
      }

      const response = await searchUsers(debouncedSearch);
      return response;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled: !!debouncedSearch,
  });

  const conversationMutation = useMutation({
    mutationFn: async (params: ConversationBodyType) => {
      const response = await axios.post("/api/conversation", {
        ...params,
      });

      return response;
    },
  });

  const handleConversation = (params: ConversationBodyType) => {
    conversationMutation.mutate({
      userId: params.userId,
      isGroup: params.isGroup,
      members: params.members,
      name: params.name,
    });
  };

  const conversationMutattionPending = conversationMutation.isPending;

  return {
    setSearch,
    conversationMutattionPending,
    debouncedSearch,
    searchQuery,
    handleConversation,
  };
};

export default useSearch;
