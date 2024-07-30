import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  conversationId: string | null;
}

const initialState: ChatState = {
  conversationId: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setConversation: (state, action: PayloadAction<string>) => {
      state.conversationId = action.payload;
    },
  },
});

export const { setConversation } = chatSlice.actions;
export default chatSlice.reducer;
