import { z } from "zod";

export const chatSchema = z.object({
  message: z.string().min(1, "Please enter a message"),
  image: z.string().optional(),
  conversationId: z.string(),
});
