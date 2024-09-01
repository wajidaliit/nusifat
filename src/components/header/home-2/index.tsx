import React, { useState } from "react";
import NavBar from "./Navbar";
import NavbarTop from "./NavbarTop";

const HeaderSecondHome: React.FC = () => {
  const [isNavbarTopOpen, setIsNavbarTopOpen] = useState<boolean>(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);

  const toggleNavbarTop = () => {
    if (!isNavbarTopOpen) {
      setIsNavBarOpen(false); // Close NavBar if it's open
    }
    setIsNavbarTopOpen((prev) => !prev);
  };

  const toggleNavBar = () => {
    if (!isNavBarOpen) {
      setIsNavbarTopOpen(false); // Close NavbarTop if it's open
    }
    setIsNavBarOpen((prev) => !prev);
  };

  return (
    <>
      <NavbarTop
        isOpen={isNavbarTopOpen}
        toggle={toggleNavbarTop}
        closeNavBar={() => setIsNavBarOpen(false)}
      />
      <NavBar
        isOpen={isNavBarOpen}
        toggle={toggleNavBar}
        closeNavbarTop={() => setIsNavbarTopOpen(false)}
      />
    </>
  );
};

export default HeaderSecondHome;
