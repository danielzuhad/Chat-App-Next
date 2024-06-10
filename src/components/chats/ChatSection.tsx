import Chats from "./Chats";
import Search from "./Search";

const ChatSection = () => {
  return (
    <>
      <div className="flex h-full w-28 flex-col items-center border-b-[1px] border-r-[1px] pr-[2px] sm:w-44 sm:pr-0">
        <Search />
        <Chats />
      </div>
    </>
  );
};

export default ChatSection;
