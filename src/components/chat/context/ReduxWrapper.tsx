"use client";

import { store } from "@/redux/store/store";
import React from "react";
import { Provider } from "react-redux";

interface ReduxWrapperProps {
  children: React.ReactNode;
}

const ReduxWrapper = ({ children }: ReduxWrapperProps) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default ReduxWrapper;
