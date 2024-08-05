import { type ClassValue, clsx } from "clsx";
import { User } from "next-auth";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const userConditional = (type: string, user: User) => {
  if (user) {
    switch (type) {
      case "email":
        return user.email ? user.email : "user@mail.com";
      case "name":
        return user.name ? user.name : "user anonymous";
      case "image":
        return user.image ? user.image : "/profile.svg";
      default:
        return user.email ? user.email : "Anonymous";
    }
  } else {
    switch (type) {
      case "email":
        return "user@mail.com";
      case "name":
        return "user anonymous";
      case "image":
        return "/profile.svg";
      default:
        return "Anonymous";
    }
  }
};
