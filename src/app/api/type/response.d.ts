import { ConversationWithRelationsType } from "@/type/type";

export interface ConversationErrorResponseType {
  data?: ConversationWithRelationsType;
  message: string;
  available: boolean;
  status: number;
}

export interface ApiConversationResponseType<T> {
  data: T;
  message: string;
  available: boolean;
}
