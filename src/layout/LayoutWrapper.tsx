import { cn } from "@/lib/utils";
import React from "react";

interface LayoutWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const LayoutWrapper = ({ children, className }: LayoutWrapperProps) => {
  return (
    <>
      <main
        className={cn(
          "container glass h-screen sm:h-[95vh] rounded-sm flex flex-col justify-center items-center",
          className
        )}
      >
        {children}
      </main>
    </>
  );
};

export default LayoutWrapper;
