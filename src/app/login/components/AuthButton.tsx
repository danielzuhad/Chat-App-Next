import { Button, ButtonProps, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AuthButtonProps extends ButtonProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const AuthButton = ({
  icon,
  label,
  className,
  variant,
  size,
  ...props
}: AuthButtonProps) => {
  return (
    <>
      <Button
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        <div className="flex items-center gap-2 ">
          {icon}
          {label}
        </div>
      </Button>
    </>
  );
};

export default AuthButton;
