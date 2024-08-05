import { User } from "@prisma/client";

export interface ConversationWithRelationsType {
  id: string;
  createdAt: any;
  lastMessageAt: any;
  name: string | null;
  isGroup: boolean | null;
  users: User[];
  // usersId: string[];
}

export type MessageBodyType = {
  conversationId: string;
  image: string;
  message: string;
};
