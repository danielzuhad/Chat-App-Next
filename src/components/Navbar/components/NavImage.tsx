/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

interface NavImageProps {
  src: string;
  className?: string;
}

const NavImage = ({ src, className }: NavImageProps) => {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <img
          src={src}
          className={cn(
            "aspect-square w-[28px] rounded-full object-cover sm:w-[40px]",
            className,
          )}
          alt="image-nav"
        />
      </div>
    </>
  );
};

export default NavImage;
