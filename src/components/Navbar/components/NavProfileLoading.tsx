import ImageLayout from "../layout/ImageLayout";
import NavImage from "./NavImage";

const NavProfileLoading = () => {
  return (
    <>
      <ImageLayout>
        <NavImage src="/profile.svg" className=" bg-gray-300 animate-pulse" />
      </ImageLayout>
    </>
  );
};

export default NavProfileLoading;
