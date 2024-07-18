import { z } from "zod";

export const searchSchema = z.object({
  query: z.string().min(3, "At least 3 characters required"),
});
