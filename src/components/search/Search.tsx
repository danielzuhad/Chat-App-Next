import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

interface SearchProps {
  className?: string;
}

const Search = ({ className }: SearchProps) => {
  return (
    <>
      <div
        className={cn("flex w-full rounded-sm border-2 p-1.5 px-3", className)}
      >
        <Input className="h-full rounded-none border-none p-0" />

        <div className="pl-2">icon</div>
      </div>
    </>
  );
};

export default Search;
