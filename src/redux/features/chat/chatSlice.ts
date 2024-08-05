import { ConversationWithRelationsType } from "@/type/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  conversation: ConversationWithRelationsType | null;
}

const initialState: ChatState = {
  conversation: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setConversation: (
      state,
      action: PayloadAction<ConversationWithRelationsType>,
    ) => {
      state.conversation = {
        ...action.payload,
        createdAt: action.payload.createdAt.toString(),
        lastMessageAt: action.payload.lastMessageAt.toString(),
      };
    },
  },
});

export const { setConversation } = chatSlice.actions;
export default chatSlice.reducer;
