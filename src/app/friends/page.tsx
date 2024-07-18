import LayoutWrapper from "@/layout/LayoutWrapper";
import SearchSection from "./components/SearchSection";

const Friends = async () => {
  return (
    <>
      <LayoutWrapper className="justify-start">
        <div className="h-full w-full p-2 px-8 sm:px-14 lg:px-24 xl:px-36 2xl:px-60">
          <h1 className="mt-24 text-center text-xl font-medium xl:text-2xl">
            Search friends for start a chat
          </h1>

          <SearchSection />
        </div>
      </LayoutWrapper>
    </>
  );
};

export default Friends;
