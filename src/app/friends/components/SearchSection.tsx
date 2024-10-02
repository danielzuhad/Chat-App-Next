"use client";

import Search from "@/components/search/Search";
import UsersSection from "./UsersSection";
import useSearch from "../hooks/useSearch";

const SearchSection = () => {
  const { debouncedSearch, setSearch, searchQuery } = useSearch();

  const { data, isLoading, status } = searchQuery;

  return (
    <div className="mt-5 w-full">
      <Search setSearch={setSearch} placeholder="at least 3 letters" />

      <UsersSection
        debouncedSearch={debouncedSearch}
        users={data}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SearchSection;
