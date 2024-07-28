import ChatList from "./ChatList";
import { Session } from "next-auth";
import { ConversationWithRelations } from "@/type/type";
import Search from "../search/Search";

interface SearchChatSectionProps {
  conversations: ConversationWithRelations[];
  currentUser: Session;
}

const SearchChatSection = ({
  conversations,
  currentUser,
}: SearchChatSectionProps) => {
  return (
    <>
      <div className="flex h-full w-28 flex-col items-center overflow-y-hidden pr-[2px] max-sm:border-b-[1px] sm:pr-0 md:w-[280px] lg:w-[350px] xl:w-[390px]">
        <div className="w-full px-2 max-md:hidden">
          <Search />
        </div>
        <ChatList conversations={conversations} currentUser={currentUser} />
      </div>
    </>
  );
};

export default SearchChatSection;
