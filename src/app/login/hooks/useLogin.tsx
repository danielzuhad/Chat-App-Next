import { loginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { login } from "../actions/loginAction";
import { signIn } from "next-auth/react";

const useLogin = () => {
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (data: z.infer<typeof loginSchema>) => await login(data),
    // onSuccess: () => {
    //   toast.success("Login successful");
    // },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      } else {
        toast.error(error.message);
      }
    },
  });

  const googleMutation = useMutation({
    mutationFn: () => signIn("google"),
    onSuccess: async (response) => {
      if (response?.ok) {
        toast.success("Login successful");
      }
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    await loginMutation.mutateAsync(data);
  };

  const isPending = () => {
    if (loginMutation.isPending || googleMutation.isPending) {
      return true;
    } else {
      return false;
    }
  };

  return { loginForm, onSubmit, isPending, googleMutation };
};

export default useLogin;
