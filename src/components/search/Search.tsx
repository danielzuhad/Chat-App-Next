"use client";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Search as SearchIcon } from "lucide-react";
import React from "react";

interface SearchProps {
  className?: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  iconSize?: number;
}

const Search = React.memo(
  ({ className, setSearch, placeholder, iconSize = 24 }: SearchProps) => {
    return (
      <>
        <div
          className={cn(
            "flex w-full items-center rounded-sm border-2 p-1.5 px-3",
            className,
          )}
        >
          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder}
            className="h-full rounded-none border-none p-0"
          />

          <div className="pl-2">
            <SearchIcon strokeWidth={1.5} color={"#18181b"} size={iconSize} />
          </div>
        </div>
      </>
    );
  },
);

export default Search;
