import { Session } from "next-auth";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import useSearchChat from "../hooks/useSearchChat";
import ChatList from "./ChatList";
import Search from "@/components/search/Search";

interface SearchChatSectionProps {
  currentUser: Session;
}

const SearchChatSection = ({ currentUser }: SearchChatSectionProps) => {
  const conversationId = useSelector(
    (state: RootState) => state.chat.conversationId,
  );

  const { setSearch, loadingList, searchedConversations } =
    useSearchChat(conversationId);

  return (
    <div className="flex h-full w-28 flex-col items-center overflow-y-hidden pr-[2px] max-sm:border-b-[1px] sm:pr-0 md:w-[280px] lg:w-[350px] xl:w-[390px]">
      <div className="mb-4 w-full px-1.5 max-md:hidden">
        <Search
          setSearch={setSearch}
          iconSize={18}
          className="rounded-[6px] border-[1.5px] py-1.5"
        />
      </div>

      <ChatList
        conversationId={conversationId}
        loadingList={loadingList}
        conversations={searchedConversations}
        currentUser={currentUser}
      />
    </div>
  );
};

export default SearchChatSection;
