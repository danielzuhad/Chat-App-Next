"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface QueryWrapperProps {
  children: React.ReactNode;
}

const QueryWrapper = ({ children }: QueryWrapperProps) => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};

export default QueryWrapper;
