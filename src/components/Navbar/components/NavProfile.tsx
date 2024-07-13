import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import NavImage from "./NavImage";
import ImageLayout from "../layout/ImageLayout";

const NavProfile = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <>
      <ImageLayout username={user?.name as string}>
        <NavImage src={user?.image ? user?.image : "/profile.svg"} />
      </ImageLayout>
    </>
  );
};

export default NavProfile;
