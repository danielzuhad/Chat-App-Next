import React from "react";
import useDebounce from "../../../hooks/useDebounce";
import { useMutation, useQuery } from "@tanstack/react-query";
import { searchUsers } from "@/actions/searchUserAction";
import axios, { AxiosError, AxiosResponse } from "axios";
import { ConversationBodyType } from "@/app/api/conversation/route";
import toast from "react-hot-toast";
import {
  ApiConversationResponseType,
  ConversationErrorResponseType,
} from "@/app/api/type/response";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { ConversationWithRelationsType } from "@/type/type";
import { setConversation } from "@/redux/features/chat/chatSlice";

const useSearch = () => {
  const [search, setSearch] = React.useState<string>("");
  const dispatch = useDispatch();
  const route = useRouter();

  const debouncedSearch = useDebounce(search, 400);

  const searchQuery = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: async () => {
      if (!debouncedSearch || debouncedSearch.length < 3) {
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

    onError: (error: AxiosError<ConversationErrorResponseType>) => {
      if (error.response?.data) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    },

    onSuccess: (
      response: AxiosResponse<
        ApiConversationResponseType<ConversationWithRelationsType>
      >,
    ) => {
      toast.success("conversation created");
      dispatch(setConversation(response.data.data));
      route.push("/");
    },
  });

  const handleConversation = React.useCallback(
    (params: ConversationBodyType) => {
      conversationMutation.mutate({
        userId: params.userId,
        isGroup: params.isGroup,
        members: params.members,
        name: params.name,
      });
    },
    [],
  );
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
