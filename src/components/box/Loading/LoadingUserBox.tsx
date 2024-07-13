import { cn } from "@/lib/utils";
import UserBox, { UserBoxProps } from "../UserBox";

const LoadingUserBox = ({
  className,
  classNameImage,
  showLastMessage = false,
  showEmail = false,
  showBorder = false,
  showContent = false,
  showIcon = false,
  ...props
}: UserBoxProps) => {
  return (
    <>
      <UserBox
        className={cn("min-h-16 w-24 rounded-sm bg-black/5 pb-3", className)}
        showContent={showContent}
        showLastMessage={showLastMessage}
        showEmail={showEmail}
        showBorder={showBorder}
        showIcon={showIcon}
        {...props}
      />
    </>
  );
};

export default LoadingUserBox;
