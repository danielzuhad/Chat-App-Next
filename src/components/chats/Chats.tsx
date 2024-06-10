import ChatBox from "./ChatBox";

const Chats = async () => {
  return (
    <>
      <p className="mb-5 mt-2 w-full px-2 pt-2 text-start text-sm font-medium text-primary/30">
        Chats
      </p>

      <div className="flex w-full flex-col">
        <ChatBox />
        <ChatBox className="bg-primary/5" />
        <ChatBox />
        <ChatBox />
      </div>
    </>
  );
};

export default Chats;
