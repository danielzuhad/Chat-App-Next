"use client";

import { BookUser, LogOut, MessageSquare } from "lucide-react";
import { signOut } from "next-auth/react";
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
            size={24}
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
            size={24}
          />
        ),
        href: "/friends",
      },
      {
        label: "Logout",
        icon: (
          <LogOut
            strokeWidth={1.5}
            size={24}
            color={pathname === "/login" ? "#FAFAFA" : "#18181b"}
          />
        ),
        href: "",
        onClick: signOut,
      },
    ],
    [pathname],
  );

  return {
    routes,
  };
};

export default useNavbar;
