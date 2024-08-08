import { ConversationWithRelationsType } from "@/type/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";

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
        createdAt: moment(action.payload.createdAt).toISOString(),
        lastMessageAt: moment(action.payload.lastMessageAt).toISOString(),
      };
    },
  },
});
export const { setConversation } = chatSlice.actions;
export default chatSlice.reducer;
