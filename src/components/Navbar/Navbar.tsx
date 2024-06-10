import { Suspense } from "react";
import NavProfileLoading from "./components/NavProfileLoading";
import NavButtonSection from "./components/NavButtonSection";
import NavProfile from "./components/NavProfile";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <>
      <div className="sm: flex w-full items-center justify-around gap-x-2 p-1 sm:h-full sm:w-[6em] sm:flex-col sm:items-center sm:justify-start sm:gap-y-5 sm:border-r-[1px] sm:pr-3 sm:pt-10 md:w-[10em] lg:w-[12em] xl:w-[14em]">
        <Suspense fallback={<NavProfileLoading />}>
          <NavProfile />
        </Suspense>

        <NavButtonSection />
      </div>
    </>
  );
};

export default Navbar;
