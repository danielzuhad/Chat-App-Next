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
      <div className="absolute flex w-full gap-x-2 rounded-[6px] border-[1px] border-slate-50 bg-[rgb(249,249,249)]/50 p-2 shadow-sm backdrop-blur-sm">
        {/* Image */}
        <img
          src={userConditional("image", user as User)}
          alt="profile"
          className="aspect-square h-14 w-14 rounded-full"
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

export default HeaderChat;
