"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthButton from "./AuthButton";
import { IoLogoGoogle } from "react-icons/io5";
import useRegister from "../hooks/useRegister";

export interface RegisterFormProps {
  handleChangeVariant: () => void;
}

const RegisterForm = ({ handleChangeVariant }: RegisterFormProps) => {
  const { registerForm, onSubmit, isPending, googleMutation } = useRegister({
    handleChangeVariant,
  });

  return (
    <>
      <Form {...registerForm}>
        <form onSubmit={registerForm.handleSubmit(onSubmit)} className="w-full">
          <FormField
            name="name"
            control={registerForm.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-black/60">Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending()}
                    {...field}
                    className="w-full rounded-[6px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={registerForm.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-black/60">Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending()}
                    {...field}
                    type="email"
                    className="w-full rounded-[6px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="password"
            control={registerForm.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-black/60">Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending()}
                    {...field}
                    type="password"
                    className="w-full rounded-[6px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isPending()}
            type="submit"
            className="mt-6 w-full rounded-sm font-normal"
          >
            Register
          </Button>
        </form>

        <AuthButton
          onClick={() => googleMutation.mutate()}
          disabled={isPending()}
          className="mt-3 w-full rounded-sm text-black"
          variant={"outline"}
          label="Login with Google"
          icon={<IoLogoGoogle />}
        />
      </Form>
    </>
  );
};

export default RegisterForm;
