import LoadingUserList from "@/components/box/Loading/LoadingUserList";
import UserBox from "@/components/box/UserBox";
import { User } from "@prisma/client";

interface UsersListProps {
  users: User[] | undefined;
  isLoading: boolean;
}

const UsersList = ({ users, isLoading }: UsersListProps) => {
  return (
    <>
      <div className="flex w-full flex-wrap justify-around gap-2">
        {users?.map((user, i) => (
          <UserBox
            key={i}
            user={user}
            showLastMessage={false}
            showBorder={false}
            showIcon={true}
            showEmail={true}
            className="mb-5 w-28 rounded-sm border-[1px] md:w-max md:py-2"
            classNameImage="sm:w-[60%] bg-black/50 md:w-[5em] lg:w-[5em] xl:w-[5em]"
          />
        ))}

        {isLoading && <LoadingUserList variant={"Friends"} />}
      </div>
    </>
  );
};

export default UsersList;

{
  // <UserBox
  //   showLastMessage={false}
  //   showBorder={false}
  //   showEmail={true}
  //   className="mb-5 w-28 rounded-sm border-[1px] md:w-max md:py-2"
  //   classNameImage="sm:w-[60%] bg-black/50 md:w-[5em] lg:w-[5em] xl:w-[5em]"
  // />;
}
