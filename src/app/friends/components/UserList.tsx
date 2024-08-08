import React from "react";
import LoadingUserList from "@/components/box/Loading/LoadingUserList";
import UserBox from "@/components/box/UserBox";
import { User } from "@prisma/client";
import useSearch from "../hooks/useSearch";
import { cn } from "@/lib/utils";

interface UserListProps {
  users: User[] | undefined;
  isLoading: boolean;
}

const UserList = React.memo(({ users, isLoading }: UserListProps) => {
  const { handleConversation, conversationMutattionPending } = useSearch();

  const memoizedHandleConversation = React.useCallback(
    (userId: string, userName: string) => {
      if (!conversationMutattionPending) {
        handleConversation({
          isGroup: false,
          userId,
          name: userName,
          members: [],
        });
      }
    },
    [handleConversation, conversationMutattionPending],
  );

  return (
    <div className="flex w-full flex-wrap justify-around gap-2">
      {users?.map((user, index) => (
        <UserBox
          onClick={() =>
            memoizedHandleConversation(user.id, user.name as string)
          }
          key={index}
          user={user}
          showLastMessage={false}
          showBorder={false}
          showIcon={true}
          showEmail={true}
          className={cn(
            "mb-5 w-28 rounded-[8px] border-[1px] sm:w-max sm:py-1.5 md:w-max md:py-2",
            conversationMutattionPending &&
              "animate-pulse bg-card-hover hover:cursor-progress",
          )}
          classNameImage="sm:w-[3em] md:w-[3em] lg:w-[3.5em] 2xl:w-[4em]  2xl:h-[4em]  rounded-[8px]  bg-black/50 "
        />
      ))}

      {isLoading && <LoadingUserList variant={"Friends"} />}
    </div>
  );
});

UserList.displayName = "UserList";

export default UserList;
