import Search from "@/components/search/Search";
import UsersSection from "./UsersSection";

const SearchSection = () => {
  return (
    <>
      <div className="mt-5 w-full">
        <Search />

        <UsersSection />
      </div>
    </>
  );
};

export default SearchSection;
