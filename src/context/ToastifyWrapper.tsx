"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

interface ToastifyWrapperProps {
  children: React.ReactNode;
}

const ToastifyWrapper = ({ children }: ToastifyWrapperProps) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default ToastifyWrapper;
