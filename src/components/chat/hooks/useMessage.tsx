import { useForm } from "react-hook-form";
import { z } from "zod";
import { chatSchema } from "../utils/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const useMessage = (conversationId: string) => {
  const form = useForm<z.infer<typeof chatSchema>>({
    resolver: zodResolver(chatSchema),
    defaultValues: { message: "", conversationId: "", image: "" },
  });

  const onSubmit = async (data: z.infer<typeof chatSchema>) => {
    const response = await axios.post("/api/message", {
      ...data,
      conversationId: conversationId,
    });
    console.log({response})

    return response
  };

  return { form, onSubmit };
};

export default useMessage;
