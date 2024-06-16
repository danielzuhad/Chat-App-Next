import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import NavImage from "./NavImage";
import ImageLayout from "../layout/ImageLayout";

const NavProfile = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <ImageLayout username={session?.user?.name as string}>
        <NavImage src={(session?.user?.image as string) || "/profile.svg"} />
      </ImageLayout>
    </>
  );
};

export default NavProfile;
