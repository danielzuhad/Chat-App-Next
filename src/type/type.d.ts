import { User } from "@prisma/client";

export interface ConversationWithRelationsType {
  id: string;
  createdAt: Date;
  lastMessageAt: Date;
  name: string | null;
  isGroup: boolean | null;
  users: User[];
  // usersId: string[];
}
