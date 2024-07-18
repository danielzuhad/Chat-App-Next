import React from "react";
import useDebounce from "../../../hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { searchUsers } from "@/actions/getCurrentUserAction";

const useSearch = () => {
  const [search, setSearch] = React.useState<string>("");

  const debouncedSearch = useDebounce(search, 400);

  const searchQuery = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: async () => {
      if (!debouncedSearch) {
        return []; // return an empty array if debouncedSearch is empty
      }

      const response = await searchUsers(debouncedSearch);
      console.log({ response });
      return response;
    },
    refetchOnWindowFocus: false,
    enabled: !!debouncedSearch,
  });

  return {
    setSearch,
    debouncedSearch,
    searchQuery,
  };
};

export default useSearch;
