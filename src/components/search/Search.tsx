"use client";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Search as SearchIcon } from "lucide-react";

interface SearchProps {
  className?: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}

const Search = ({ className, setSearch, placeholder }: SearchProps) => {
  return (
    <>
      <div
        className={cn(
          "flex w-full items-center rounded-sm border-2 p-1.5 px-3",
          className,
        )}
      >
        <Input
          onChange={(e) =>
            setSearch(e.target.value.length < 3 ? "" : e.target.value)
          }
          placeholder={placeholder}
          className="h-full rounded-none border-none p-0"
        />

        <div className="pl-2">
          <SearchIcon strokeWidth={1.5} color={"#18181b"} size={24} />
        </div>
      </div>
    </>
  );
};

export default Search;
