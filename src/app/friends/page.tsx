import Search from "@/components/search/Search";
import LayoutWrapper from "@/layout/LayoutWrapper";

const Friends = () => {
  return (
    <>
      <LayoutWrapper className="justify-start border-2 p-2 px-3">
        <h1 className="mt-24 text-center text-xl font-medium xl:text-2xl">
          Search friends for start a chat
        </h1>

        <Search className="mt-5" />
      </LayoutWrapper>
    </>
  );
};

export default Friends;
