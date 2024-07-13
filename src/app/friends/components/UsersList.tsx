import UserBox from "@/components/box/UserBox";

interface UsersListProps {}

const UsersList = ({}: UsersListProps) => {
  return (
    <>
      <div className="flex w-full flex-wrap justify-around gap-2">
        <UserBox
          showLastMessage={false}
          showBorder={false}
          showEmail={true}
          className="mb-5 w-28 rounded-sm border-[1px] md:w-max md:py-2"
          classNameImage="sm:w-[60%] bg-black/50 md:w-[5em] lg:w-[5em] xl:w-[5em]"
        />
        <UserBox
          showLastMessage={false}
          showBorder={false}
          showEmail={true}
          className="mb-5 w-28 rounded-sm border-[1px] md:w-max md:py-2"
          classNameImage="sm:w-[60%] bg-black/50 md:w-[5em] lg:w-[5em] xl:w-[5em]"
        />
        <UserBox
          showLastMessage={false}
          showBorder={false}
          showEmail={true}
          className="mb-5 w-28 rounded-sm border-[1px] md:w-max md:py-2"
          classNameImage="sm:w-[60%] bg-black/50 md:w-[5em] lg:w-[5em] xl:w-[5em]"
        />
        {/* <LoadingUserList variant={"Friends"} /> */}
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
