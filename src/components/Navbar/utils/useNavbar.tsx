"use client";

import { BookUser, LogOut, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

export type RouteType = {
  label: string;
  icon: React.ReactNode;
  href: string;
  onClick?: () => void;
};

const useNavbar = () => {
  const pathname = usePathname();

  const routes: RouteType[] = React.useMemo(
    () => [
      {
        label: "Chats",
        icon: (
          <MessageSquare
            strokeWidth={1.5}
            color={pathname === "/" ? "#FAFAFA" : "#18181b"}
            size={28}
          />
        ),
        href: "/",
      },
      {
        label: "Friends",
        icon: (
          <BookUser
            strokeWidth={1.5}
            color={pathname === "/friends" ? "#FAFAFA" : "#18181b"}
            size={28}
          />
        ),
        href: "/friends",
      },
      {
        label: "Logout",
        icon: (
          <LogOut
            strokeWidth={1.5}
            size={28}
            color={pathname === "/login" ? "#FAFAFA" : "#18181b"}
          />
        ),
        href: "/logout",
        onClick: () => {
          // handle logout logic here
        },
      },
    ],
    [pathname]
  );

  return {
    routes,
  };
};

export default useNavbar;
