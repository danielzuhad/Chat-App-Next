import React from "react";
import { cn, userConditional } from "@/lib/utils";
import { User } from "@prisma/client";

export interface UserBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  classNameImage?: string;
  showLastMessage?: boolean;
  showEmail?: boolean;
  showBorder?: boolean;
  showContent?: boolean;
  showIcon?: boolean;
  user: User | undefined;
}

const UserBox = React.memo(
  ({
    className,
    classNameImage,
    showLastMessage = true,
    showEmail = false,
    showBorder = true,
    showContent = true,
    showIcon = true,
    user,
    ...props
  }: UserBoxProps) => {
    return (
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center rounded-[2px] pt-2.5 hover:cursor-pointer hover:bg-card-hover",
          className,
        )}
        {...props}
      >
        <div className="flex w-full flex-col items-center px-1.5 md:px-3">
          {/* Profile & Name */}
          <div className="flex w-full flex-col items-center sm:flex-row md:justify-center">
            {showIcon && (
              <img
                src={userConditional("image", user as User) as string}
                alt=""
                className={cn(
                  "mb-0.5 aspect-square w-[75%] rounded-[4px] object-cover sm:w-[30%] sm:rounded-full md:h-[3em] md:w-[3em]",
                  classNameImage,
                )}
              />
            )}
            <div className="flex h-full w-full flex-col justify-between py-2 sm:pl-2">
              {/* Name */}
              <p className="line-clamp-2 w-[90%] text-start text-xs font-semibold leading-3 text-primary/70 md:text-base">
                {showContent &&
                  (userConditional("name", user as User) as string)}
              </p>

              {/* Email */}
              {showEmail && (
                <div className="line-clamp-2 w-full pt-0.5 text-[10px] font-medium text-primary/40">
                  {showEmail &&
                    (userConditional("email", user as User) as string)}
                </div>
              )}

              {/* Chat */}
              {showLastMessage && (
                <div className="pt-0.5 text-[10px] font-medium text-primary/50">
                  testttttt
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Border */}
        {showBorder && (
          <div className="flex w-full justify-center px-1.5 sm:mt-2 md:px-3">
            <div className="w-full border-b-[1px] border-primary/5" />
          </div>
        )}
      </div>
    );
  },
);

export default UserBox;
