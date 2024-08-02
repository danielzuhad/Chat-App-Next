import React from "react";

const UserChatSection = React.memo(() => {
  // const { conversationByIdQuery, memorizedConversationId } = useChat();
  console.log("conversation");

  // const data = React.useMemo(
  //   () => conversationByIdQuery.data,
  //   [conversationByIdQuery.data],
  // );

  return (
    <div className="h-full w-full border-[1px] p-2">
      {/* ID : {memorizedConversationId} */}
      conversation
    </div>
  );
});

export default UserChatSection;
