import { cva, VariantProps } from "class-variance-authority";
import LoadingUserBox from "./LoadingUserBox";
import { cn } from "@/lib/utils";

const LoadingUserListVariants = cva("animate-pulse duration-500 mb-2", {
  variants: {
    variant: {
      Chats: "w-full ",
      Friends: "w-36 ",
    },
  },

  defaultVariants: {
    variant: "Chats",
  },
});

interface LoadingUserListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof LoadingUserListVariants> {}

const LoadingUserList = ({
  variant,
  className,
  ...props
}: LoadingUserListProps) => {
  const loadingBoxes = Array.from({ length: 6 });

  return (
    <>
      {loadingBoxes.map((_, index) => (
        <LoadingUserBox
          key={index}
          className={cn(LoadingUserListVariants({ className, variant }))}
          {...props}
        />
      ))}
    </>
  );
};

export default LoadingUserList;
