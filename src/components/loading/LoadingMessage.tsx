import { LoaderCircle } from "lucide-react";

const LoadingMessage = () => {
  return (
    <div className="flex h-full w-full animate-spin items-center justify-center transition-all">
      <LoaderCircle size={15} />
    </div>
  );
};

export default LoadingMessage;
