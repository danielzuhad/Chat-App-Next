import { ImagePlus, SendHorizontal } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CldUploadButton } from "next-cloudinary";
import { z } from "zod";
import { chatSchema } from "../utils/utils";
import { UseFormReturn } from "react-hook-form";

interface FormChatProps {
  form: UseFormReturn<
    {
      message: string;
      conversationId: string;
      image?: any;
    },
    any,
    undefined
  >;
  onSubmit: (data: z.infer<typeof chatSchema>) => void;
  handleUpload: (result: any) => void;
}

const FormChat = ({ form, handleUpload, onSubmit }: FormChatProps) => {
  return (
    <>
      <div className="flex w-full items-center border-t-[1px] bg-[rgb(249,249,249)]/50 px-1.5">
        <CldUploadButton
          options={{ maxFiles: 1 }}
          onSuccess={handleUpload}
          uploadPreset="presestnew"
          className="pb-1 pr-2 hover:cursor-pointer"
        >
          <ImagePlus size={26} strokeWidth={1.5} />
        </CldUploadButton>

        <Form {...form}>
          <form
            className="flex w-full items-center pb-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="say something to ur friend"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormControl className="ml-1">
              <button
                type="submit"
                className="w-max pt-1.5 hover:cursor-pointer"
              >
                <SendHorizontal size={26} strokeWidth={1.5} />
              </button>
            </FormControl>
          </form>
        </Form>
      </div>
    </>
  );
};

export default FormChat;
