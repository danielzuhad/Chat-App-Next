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
          "bg-backgroundn container flex h-screen flex-col items-center justify-center sm:h-[95vh] sm:rounded-sm",
          className,
        )}
      >
        {children}
      </main>
    </>
  );
};

export default LayoutWrapper;
