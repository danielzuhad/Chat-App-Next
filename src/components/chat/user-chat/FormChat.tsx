import { ImagePlus, SendHorizontal } from "lucide-react";
import useMessage from "../hooks/useMessage";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormChatProps {
  conversationId: string;
}

const FormChat = ({ conversationId }: FormChatProps) => {
  const { form, onSubmit } = useMessage(conversationId);

  return (
    <>
      <div className="flex w-full items-center">
        <div className="pb-1 pr-2 hover:cursor-pointer">
          <ImagePlus size={26} strokeWidth={1.5} />
        </div>

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
