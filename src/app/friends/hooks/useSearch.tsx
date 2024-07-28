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
    queryKey: ["search", debouncedSearch],
    queryFn: async () => {
      if (!debouncedSearch) {
        return []; // return an empty array if debouncedSearch is empty
      }

      const response = await searchUsers(debouncedSearch);
      return response;
    },
    refetchOnWindowFocus: false,
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
