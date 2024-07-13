import { cn } from "@/lib/utils";

export type LoadingLayerImageProps = {
  className?: string;
};

const LoadingLayerImage = ({ className }: LoadingLayerImageProps) => {
  return (
    <>
      <div
        className={
          (cn(
            "absolute aspect-square h-full w-[28px] animate-pulse rounded-full bg-black/20 object-cover transition-all duration-700 sm:w-[40px]",
          ),
          className)
        }
      />
    </>
  );
};

export default LoadingLayerImage;
