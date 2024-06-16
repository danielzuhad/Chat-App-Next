import UserBox from "../box/UserBox";

const Chats = async () => {
  return (
    <>
      <p className="mb-5 mt-2 w-full px-2 pt-2 text-start text-sm font-medium text-primary/30">
        Chats
      </p>

      <div className="flex w-full flex-col">
        <UserBox showLastMessage={false} showEmail={true} />
        <UserBox className="bg-[#f8f8f8]/80" />
        <UserBox />
        <UserBox />
      </div>
    </>
  );
};

export default Chats;
