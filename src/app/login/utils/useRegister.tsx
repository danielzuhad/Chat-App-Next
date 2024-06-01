import { registerSchema } from "@/schemas";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "./registerAction";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { RegisterFormProps } from "../components/RegisterForm";
import { signIn } from "next-auth/react";

const useRegister = ({ handleChangeVariant }: RegisterFormProps) => {
  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const registerMutation = useMutation({
    mutationFn: (data: z.infer<typeof registerSchema>) => register(data),
    onSuccess: (data) => {
      toast.success(data.success as string);
      toast.success("Try to Login");
      registerForm.reset();
      handleChangeVariant();
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const googleMutation = useMutation({
    mutationFn: () => signIn("google"),
    onSuccess: () => {
      toast.success("Login successful");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof registerSchema>> = async (
    data
  ) => {
    await registerMutation.mutate(data);
  };

  const isPending = () => {
    if (registerMutation.isPending || googleMutation.isPending) {
      return true;
    } else {
      return false;
    }
  };

  return { registerForm, onSubmit, isPending, googleMutation };
};

export default useRegister;
