/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

interface UserBoxProps {
  className?: string;
  showLastMessage?: boolean;
  showEmail?: boolean;
}

const UserBox = ({
  className,
  showLastMessage = true,
  showEmail = false,
}: UserBoxProps) => {
  return (
    <>
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center rounded-[2px] pt-3 hover:cursor-pointer hover:bg-[#f8f8f8]/80",
          className,
        )}
      >
        <div className="flex w-full flex-col items-center px-3">
          {/* Profile & Name */}
          <div className="flex w-full flex-col items-center md:flex-row">
            <img
              src="/profile.svg"
              alt=""
              className="mb-0.5 aspect-square w-[70%] rounded-sm border-2 sm:w-[40%] md:rounded-full lg:w-[25%] xl:w-[25%]"
            />
            <div className="flex h-full w-full flex-col justify-between py-2 md:pl-2">
              {/* Name */}
              <p className="font-sm w-full text-start text-base font-medium text-primary/70">
                User
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
                  test@mail.com
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Border */}
        <div className="mt-3 flex w-full justify-center px-3">
          <div className="w-full border-b-[1px] border-primary/5" />
        </div>
      </div>
    </>
  );
};

export default UserBox;
