import { cn } from "@/lib/utils";

interface ChatBoxProps {
  className?: string;
}

const ChatBox = ({ className }: ChatBoxProps) => {
  return (
    <>
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center rounded-[2px] pt-3",
          className,
        )}
      >
        <div className="flex w-full flex-col items-center px-1">
          {/* Profile & Name */}
          <div className="flex w-full flex-col items-center">
            <img
              src="/profile.svg"
              alt=""
              className="mb-0.5 aspect-square w-[70%] rounded-sm border-2 sm:w-[55%]"
            />
            <p className="font-sm w-full text-start text-sm font-medium text-primary/60">
              User
            </p>
          </div>

          {/* Chat*/}
          <div className="max-sm:hidden"></div>
        </div>

        {/* Border */}
        <div className="mt-3 flex w-full justify-center px-2">
          <div className="w-full border-b-[1px] border-primary/5" />
        </div>
      </div>
    </>
  );
};

export default ChatBox;
