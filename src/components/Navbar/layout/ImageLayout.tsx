interface ImageLayoutProps {
  children: React.ReactNode;
  username?: string;
}

const ImageLayout = ({ children, username }: ImageLayoutProps) => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-y-0.5 sm:gap-y-1 md:justify-start">
        {children}{" "}
        <p className="visible line-clamp-1 text-center text-sm text-primary sm:line-clamp-2 sm:px-0 sm:max-sm:hidden md:line-clamp-none">
          {username || "User"}
        </p>
      </div>
    </>
  );
};

export default ImageLayout;
