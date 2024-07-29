"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface QueryWrapperProps {
  children: React.ReactNode;
}

const QueryWrapper = ({ children }: QueryWrapperProps) => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
        {/* <ReactQueryDevtools initialIsOpen /> */}
      </QueryClientProvider>
    </>
  );
};

export default QueryWrapper;
