import { ConversationWithRelations } from "@/type/type";

export interface ConversationErrorResponse {
  data?: ConversationWithRelations;
  message: string;
  available: boolean;
  status: number;
}
