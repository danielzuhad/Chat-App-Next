"use client";

import { useMutation } from "@tanstack/react-query";
import { LogOut, MessageSquare, UserRoundSearch } from "lucide-react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export type RouteType = {
  label: string;
  icon: React.ReactNode;
  href: string;
  onClick?: () => void;
};

const useNavbar = () => {
  const pathname = usePathname();

  const signOutMutation = useMutation({
    mutationFn: async () => await signOut(),

    onSuccess: () => {
      toast.success("Logout successful");
    },

    onError: () => {
      toast.error("Something went wrong");
    },
  });

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
          <UserRoundSearch
            strokeWidth={1.5}
            size={24}
            color={pathname === "/friends" ? "#FAFAFA" : "#18181b"}
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
        onClick: signOutMutation.mutate,
      },
    ],
    [pathname],
  );

  return {
    routes,
  };
};

export default useNavbar;
