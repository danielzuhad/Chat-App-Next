import { cn } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";

const boxVariants = cva(
  "w-max  border-[1px]  px-4 py-1  text-sm shadow-sm lg:text-base",
  {
    variants: {
      variant: {
        left: "bg-black/5 rounded-tr-md rounded-b-md",
        right: "bg-primary/85 text-white rounded-tl-md rounded-b-md",
      },
    },
  },
);

export interface BoxProps
  extends React.ComponentProps<"p">,
    VariantProps<typeof boxVariants> {
  message: Prisma.MessageGetPayload<{ include: { sender: true; seen: true } }>;
  className?: string;
}

const Box = ({ message, variant, className, ...props }: BoxProps) => {
  return (
    <>
      <div
        className={cn(
          "mb-1.5 flex h-max w-full rounded-b",
          variant === "left" &&
            `justify-start pr-10 lg:pr-28 xl:pr-36 2xl:pr-48`,
          variant === "right" &&
            `justify-end pl-10 lg:pl-28 xl:pl-36 2xl:pl-48`,
        )}
      >
        {message.image ? (
          <Image
            src={message.image}
            alt="image"
            width={200}
            height={200}
            className="aspect-square w-52 rounded-sm object-contain py-1"
          />
        ) : (
          <p className={cn(boxVariants({ variant, className }))} {...props}>
            {message.body}
          </p>
        )}
      </div>
    </>
  );
};

interface MessageBoxProps {
  message: Prisma.MessageGetPayload<{ include: { sender: true; seen: true } }>;
  className?: string;
  variant?: "left" | "right";
}

const MessageBox = ({ message, className, variant }: MessageBoxProps) => {
  return (
    <>
      <Box className={className} message={message} variant={variant} />
    </>
  );
};

export default MessageBox;
