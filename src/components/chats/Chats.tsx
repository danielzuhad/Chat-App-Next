import LoadingUserList from "../box/Loading/LoadingUserList";
import UserBox from "../box/UserBox";

const Chats = async () => {
  return (
    <>
      <p className="mb-5 mt-2 w-full px-2 pt-2 text-start text-sm font-medium text-primary/30">
        Chats
      </p>

      <div className="flex h-[80vh] w-full flex-col overflow-auto sm:h-full">
        <UserBox
          classNameImage="bg-black/50"
          showLastMessage={false}
          showEmail={true}
        />
        <UserBox
          className="bg-black/5"
          classNameImage="bg-black/50"
          showLastMessage={false}
          showEmail={true}
        />
        <UserBox
          classNameImage="bg-black/50"
          showLastMessage={false}
          showEmail={true}
        />

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
