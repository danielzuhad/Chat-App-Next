"use client";

import React, { useCallback } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const FormSection = () => {
  const [formVariant, setFormVariant] = React.useState<"login" | "register">(
    "register"
  );

  const handleFormVariantChange = useCallback(() => {
    setFormVariant((prev) => (prev === "login" ? "register" : "login"));
  }, []);

  return (
    <>
      <div className="mt-14 w-full px-5 sm:w-[550px]">
        {formVariant === "login" && <LoginForm />}

        {formVariant === "register" && (
          <RegisterForm handleChangeVariant={handleFormVariantChange} />
        )}

        <div className="mt-5 flex gap-1 text-black/50 text-sm">
          <p>
            {formVariant === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <p
            onClick={handleFormVariantChange}
            className="underline hover:cursor-pointer "
          >
            {formVariant === "login" ? "Register" : "Login"}
          </p>
        </div>
      </div>
    </>
  );
};

export default FormSection;
