import { z } from "zod";
import { chatSchema } from "../utils/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useOptimisticUpdate from "@/hooks/useOptimisticUpdate";

const useMessage = (conversationId: string) => {
  const { optimisticUpdate } = useOptimisticUpdate();

  const form = useForm<z.infer<typeof chatSchema>>({
    resolver: zodResolver(chatSchema),
    defaultValues: { message: "", conversationId: "", image: "" },
  });

  const submitMutation = useMutation({
    mutationKey: ["addMessage"],
    mutationFn: async (data: z.infer<typeof chatSchema>) => {
      const response = await axios.post("/api/message", {
        ...data,
        conversationId: conversationId,
      });

      return response;
    },

    onSuccess: () => {
      form.reset();
    },

    onSettled: async () => optimisticUpdate("messages"),
  });

  const onSubmit = async (data: z.infer<typeof chatSchema>) =>
    submitMutation.mutate(data);

  const handleUpload = async (result: any) => {
    const response = await axios.post("/api/message", {
      image: result.info.secure_url,
      conversationId: conversationId,
    });

    if (response.status === 200) {
      toast.success("Image uploaded successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  return { form, onSubmit, handleUpload, submitMutation };
};

export default useMessage;
