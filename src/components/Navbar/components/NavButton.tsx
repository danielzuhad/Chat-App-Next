"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  className?: string;
  onClick?: () => void;
}

const NavButton = ({
  icon,
  label,
  href,
  className,
  onClick,
}: NavButtonProps) => {
  const pathname = usePathname();

  return (
    <>
      {label === "Logout" && (
        <div className="my-5 w-full rounded-sm border-[1px] border-primary/5 max-sm:hidden" />
      )}

      <Link
        onClick={onClick}
        href={href}
        className={cn(
          "flex w-full flex-col items-center justify-center gap-y-0.5 rounded-[6px] py-1 hover:cursor-pointer hover:bg-primary/10 sm:py-2 md:flex-row md:justify-start md:gap-x-2 md:pl-2 lg:pl-4",
          label === "Chats" && "sm:mt-7",
          pathname === href && "dark bg-background hover:bg-background",
          className,
        )}
      >
        <div>{icon}</div>
        <p
          className={cn(
            "visible text-sm font-normal text-primary sm:text-xs",
            pathname === href && "dark text-primary",
          )}
        >
          {label}
        </p>
      </Link>
    </>
  );
};

export default NavButton;
