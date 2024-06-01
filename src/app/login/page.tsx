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
    <>
      <LayoutWrapper>
        {/* Tittle */}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex justify-center items-center gap-1.5">
            <IoChatbubblesOutline size={27} />
            <h1 className="font-semibold text-3xl lg:text-4xl">
              Chat Next App
            </h1>
          </div>

          <p className="font-light text-black/70 text-sm">
            &quot;Threads of Words, Weaving Souls Together&quot;
          </p>
        </div>

        <FormSection />
      </LayoutWrapper>
    </>
  );
};

export default Login;
