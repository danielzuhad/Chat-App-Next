import { getConversationById } from "@/actions/getConversationByIdAction";
import { useMutation } from "@tanstack/react-query";

const useChat = () => {
  // fetch conversations by id
  const getConversationByIdMutation = useMutation({
    mutationFn: async (conversationId: string) => {
      if (!conversationId) {
        return null;
      }

      const response = await getConversationById(conversationId);
      return response;
    },
  });

  return {
    getConversationByIdMutation,
  };
};

export default useChat;
