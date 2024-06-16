"use client";

import useNavbar from "../utils/useNavbar";
import NavButton from "./NavButton";

const NavButtonSection = () => {
  const { routes } = useNavbar();

  return (
    <>
      {routes.map((route) => (
        <NavButton
          onClick={route.onClick}
          key={route.label}
          icon={route.icon}
          label={route.label}
          href={route.href}
          className="w-full"
        />
      ))}
    </>
  );
};

export default NavButtonSection;
