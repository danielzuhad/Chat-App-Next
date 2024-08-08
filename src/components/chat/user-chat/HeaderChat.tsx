import { userConditional } from "@/lib/utils";
import { User } from "next-auth";
import { memo } from "react";
import "../../../app/globals.css";

interface HeaderChatProps {
  user: User | null;
}

const HeaderChat = memo(({ user }: HeaderChatProps) => {
  return (
    <>
      <div className="absolute flex w-full gap-x-2 border-b-[1px] border-slate-50 bg-[rgb(249,249,249)]/50 p-2 px-4 shadow-sm backdrop-blur-md">
        {/* Image */}
        <img
          src={userConditional("image", user as User)}
          alt="profile"
          className="aspect-square h-12 w-12 rounded-full"
        />

        {/* Information */}
        <div className="flex w-full flex-col justify-center">
          <p className="text-base font-semibold leading-4">
            {userConditional("name", user as User)}
          </p>
          <p className="pt-1 text-xs font-normal text-black/50">
            {userConditional("email", user as User)}
          </p>
        </div>
      </div>
    </>
  );
});

HeaderChat.displayName = "HeaderChat";

export default HeaderChat;
