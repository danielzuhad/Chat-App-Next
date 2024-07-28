/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
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

const UserBox = ({
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
  const userConditional = (type: string) => {
    if (user) {
      switch (type) {
        case "email":
          return user.email ? user.email : "user@mail.com";
        case "name":
          return user.name ? user.name : "user anonymous";
        case "image":
          return user.image ? user.image : "/profile.svg";
        default:
          return user.email ? user.email : "Anonymous";
      }
    } else {
      switch (type) {
        case "email":
          return "user@mail.com";
        case "name":
          return "user anonymous";
        case "image":
          return "/profile.svg";
        default:
          return "Anonymous";
      }
    }
  };

  return (
    <>
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center rounded-[2px] pt-3 hover:cursor-pointer hover:bg-card-hover",
          className,
        )}
        {...props}
      >
        <div className="flex w-full flex-col items-center px-1.5 md:px-3">
          {/* Profile & Name */}
          <div className="flex w-full flex-col items-center md:flex-row md:justify-center">
            {showIcon && (
              <img
                src={userConditional("image") as string}
                alt=""
                className={cn(
                  "mb-0.5 aspect-square w-[80%] rounded-sm sm:w-[60%] md:w-[45%] md:rounded-full lg:w-[25%] xl:w-[25%]",
                  classNameImage,
                )}
              />
            )}
            <div className="flex h-full w-full flex-col justify-between py-2 md:pl-2">
              {/* Name */}
              <p className="font-sm line-clamp-1 w-full text-start text-base font-medium text-primary/70">
                {showContent && (userConditional("name") as string)}
              </p>
              {/* Chat*/}
              {showLastMessage && (
                <div className="text-xs font-normal text-primary/50 max-md:hidden">
                  testttttt
                </div>
              )}
              {/* Email*/}
              {showEmail && (
                <div className="text-xs font-medium text-primary/50 max-md:hidden">
                  {showContent && (userConditional("email") as string)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Border */}
        {showBorder && (
          <div className="flex w-full justify-center px-1.5 md:mt-3 md:px-3">
            <div className="w-full border-b-[1px] border-primary/5" />
          </div>
        )}
      </div>
    </>
  );
};

export default UserBox;
