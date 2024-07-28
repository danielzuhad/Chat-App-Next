import { Message, User } from "@prisma/client";

export interface ConversationWithRelations {
  id: string;
  createdAt: Date;
  lastMessageAt: Date;
  name: string | null;
  isGroup: boolean | null;
  messages: Message[];
  users: User[];
}
