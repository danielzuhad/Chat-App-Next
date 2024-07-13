/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

export interface UserBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  classNameImage?: string;
  showLastMessage?: boolean;
  showEmail?: boolean;
  showBorder?: boolean;
  showContent?: boolean;
  showIcon?: boolean;
}

const UserBox = ({
  className,
  classNameImage,
  showLastMessage = true,
  showEmail = false,
  showBorder = true,
  showContent = true,
  showIcon = true,
  ...props
}: UserBoxProps) => {
  return (
    <>
      <div
        className={cn(
          "hover:bg-card-hover flex w-full flex-col items-center justify-center rounded-[2px] pt-3 hover:cursor-pointer",
          className,
          { ...props },
        )}
      >
        <div className="flex w-full flex-col items-center px-3">
          {/* Profile & Name */}
          <div className="flex w-full flex-col items-center md:flex-row md:justify-center">
            {showIcon && (
              <img
                src="/profile.svg"
                alt=""
                className={cn(
                  "mb-0.5 aspect-square w-[80%] rounded-sm sm:w-[60%] md:w-[45%] md:rounded-full lg:w-[25%] xl:w-[25%]",
                  classNameImage,
                )}
              />
            )}
            <div className="flex h-full w-full flex-col justify-between py-2 md:pl-2">
              {/* Name */}
              <p className="font-sm w-full text-start text-base font-medium text-primary/70">
                {showContent && "User"}
              </p>
              {/* Chat*/}
              {showLastMessage && (
                <div className="text-xs font-normal text-primary/50 max-md:hidden">
                  testttttt
                </div>
              )}
              {/* Email*/}
              {showEmail && (
                <div className="text-xs font-normal text-primary/50 max-md:hidden">
                  {showContent && "test@mail.com"}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Border */}
        {showBorder && (
          <div className="flex w-full justify-center px-3 md:mt-3">
            <div className="w-full border-b-[1px] border-primary/5" />
          </div>
        )}
      </div>
    </>
  );
};

export default UserBox;
