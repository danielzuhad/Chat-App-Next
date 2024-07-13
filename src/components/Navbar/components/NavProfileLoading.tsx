import ImageLayout from "../layout/ImageLayout";
import NavImage from "./NavImage";

const NavProfileLoading = () => {
  return (
    <>
      <ImageLayout className="relative">
        <NavImage src="/profile.svg" className="animate-pulse bg-gray-300" />
      </ImageLayout>
    </>
  );
};

export default NavProfileLoading;
