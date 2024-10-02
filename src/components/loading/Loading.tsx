import LayoutWrapper from "@/layout/LayoutWrapper";
import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <LayoutWrapper>
      <div className="animate-spin opacity-40">
        <LoaderCircle size={100} strokeWidth={2.5} />
      </div>
    </LayoutWrapper>
  );
};

export default Loading;
