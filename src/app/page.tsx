import ChatSection from "@/components/chat/ChatSection";
import LayoutWrapper from "@/layout/LayoutWrapper";

export default function Home() {
  return (
    <>
      <LayoutWrapper className="h-full flex-row sm:h-full">
        <ChatSection />
      </LayoutWrapper>
    </>
  );
}
