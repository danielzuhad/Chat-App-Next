import { cn } from "@/lib/utils";

interface ImageLayoutProps {
  children: React.ReactNode;
  username?: string;
  className?: string;
}

const ImageLayout = ({ children, username, className }: ImageLayoutProps) => {
  return (
    <>
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center gap-y-0.5 sm:gap-y-1 md:justify-start",
          className,
        )}
      >
        {children}{" "}
        <p className="visible line-clamp-1 text-center text-sm text-primary sm:line-clamp-2 sm:px-0 sm:max-sm:hidden md:line-clamp-none">
          {username || "User"}
        </p>
      </div>
    </>
  );
};

export default ImageLayout;
