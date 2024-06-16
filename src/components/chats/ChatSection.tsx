import Chats from "./Chats";
import Search from "./Search";

const ChatSection = () => {
  return (
    <>
      <div className="flex h-full w-28 flex-col items-center border-r-[1px] pr-[2px] max-sm:border-b-[1px] sm:w-44 sm:pr-0 md:w-[280px] lg:w-[350px] xl:w-[390px]">
        <Search />
        <Chats />
      </div>
    </>
  );
};

export default ChatSection;
