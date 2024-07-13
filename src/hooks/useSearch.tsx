import React from "react";
import useDebounce from "./useDebounce";

const useSearch = () => {
  const [search, setSearch] = React.useState<string>("");
  const debouncedSearch = useDebounce(search, 300);

  return {
    setSearch,
    debouncedSearch,
  };
};

export default useSearch;
