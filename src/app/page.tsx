import ChatSection from "@/components/chats/ChatSection";
import LayoutWrapper from "@/layout/LayoutWrapper";

export default function Home() {
  return (
    <>
      <LayoutWrapper className="h-full flex-row sm:h-full">
        <ChatSection />
        <div className="h-full w-full border-[1px]">Messages</div>
      </LayoutWrapper>
    </>
  );
}
