import React from "react";
import useChat from "../hooks/useChat";

const UserChatSection = () => {
  const { conversationByIdQuery, conversationId } = useChat();
  const data = React.useMemo(
    () => conversationByIdQuery.data,
    [conversationByIdQuery.data],
  );

  return (
    <div className="h-full w-full border-[1px] p-2">ID : {conversationId}</div>
  );
};

export default UserChatSection;
