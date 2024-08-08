import { getMessages } from "@/actions/getMessagesAction";
import { useQuery } from "@tanstack/react-query";

const useChat = (conversationId: string) => {
  // fetch conversations by id
  const mesasgeQuery = useQuery({
    queryKey: ["messages", conversationId],
    queryFn: async () => {
      const response = await getMessages(conversationId);
      return response;
    },
  });

  return {
    mesasgeQuery,
  };
};

export default useChat;
