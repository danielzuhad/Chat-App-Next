import LoadingUserList from "../box/Loading/LoadingUserList";
import UserBox from "../box/UserBox";

const Chats = async () => {
  const length = 4;

  return (
    <>
      <p className="mb-5 mt-2 w-full px-2 pt-2 text-start text-sm font-medium text-primary/30">
        Chats
      </p>

      <div className="flex h-[80vh] w-full flex-col overflow-auto sm:h-full">
        {Array.from({ length }).map((_, index) => (
          <UserBox
            user={undefined}
            classNameImage="bg-black/50"
            showLastMessage={false}
            showEmail={true}
          />
        ))}

        <div className="w-full sm:px-[1px] md:px-1">
          <LoadingUserList variant={"Chats"} />
        </div>
      </div>
    </>
  );
};

export default Chats;

{
  /* <UserBox
  classNameImage="bg-black/50"
  showLastMessage={false}
  showEmail={true}
/>; */
}
