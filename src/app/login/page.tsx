import LayoutWrapper from "@/layout/LayoutWrapper";
import { IoChatbubblesOutline } from "react-icons/io5";
import FormSection from "./components/FormSection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <LayoutWrapper>
      {/* Tittle */}
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center gap-1.5">
          <IoChatbubblesOutline size={27} />
          <h1 className="text-3xl font-semibold lg:text-4xl">Chat Next App</h1>
        </div>

        <p className="text-sm font-light text-black/70">
          &quot;Threads of Words, Weaving Souls Together&quot;
        </p>
      </div>

      <FormSection />
    </LayoutWrapper>
  );
};

export default Login;
