"use client";

import { SessionProvider } from "next-auth/react";

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};

export default AuthWrapper;
