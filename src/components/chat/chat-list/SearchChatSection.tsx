import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import useSearchChat from "../hooks/useSearchChat";
import ChatList from "./ChatList";
import Search from "@/components/search/Search";
import { User } from "@prisma/client";

interface SearchChatSectionProps {
  currentUser: User;
}

const SearchChatSection = ({ currentUser }: SearchChatSectionProps) => {
  const conversation = useSelector(
    (state: RootState) => state.chat.conversation,
  );

  const conversationId = conversation?.id ?? null;

  const { setSearch, loadingList, searchedConversations } = useSearchChat(
    conversationId ?? null,
  );

  return (
    <div className="flex h-full w-20 flex-col items-center overflow-y-hidden pr-[2px] max-sm:border-b-[1px] sm:w-[220px] sm:pr-0 md:w-[320px] lg:w-[450px] xl:w-[460px] 2xl:w-[550px]">
      <div className="mb-4 w-full px-1.5 max-md:hidden">
        <Search
          setSearch={setSearch}
          iconSize={18}
          className="rounded-[6px] border-[1.5px] py-1.5"
        />
      </div>

      <ChatList
        conversationState={conversation}
        loadingList={loadingList}
        conversations={searchedConversations}
        currentUser={currentUser}
      />
    </div>
  );
};

export default SearchChatSection;
