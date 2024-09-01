import React, { useState } from 'react';
import CommonImage from "@/components/CommonImage";
import Container from "@/components/Container";
import logo from "@/assets/header/logo.png";
import Navlinks from "./Navlinks";
import { AiOutlineClose } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";

import NavBar from "../nav-bar";
import Link from "next/link";

export default function HeaderFirstHome() {
  const [open, setOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpen(false)
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleButton = () => {
    setOpen(!open);
  };

  return (
    <header>
      <Container className="flex justify-between items-center py-3 relative z-10">
        <div>
          <Link href="/home" passHref>
            <CommonImage src={logo} alt="logo" width={120} height={120} />
          </Link>
        </div>
        <div className="hidden md:block">
          <Navlinks />
        </div>
        <div className="block md:hidden absolute right-24 top-8">
          <button onClick={toggleButton}>
            {open ? (
              <AiOutlineClose size="2.2rem" />
            ) : (
              <MdContactMail color="#E90000" size="2.2rem" />
            )}
          </button>
        </div>
        {open && (
          <div className="absolute top-20 md:hidden bg-yellow-50 z-10 w-full">
            <Navlinks />
          </div>
        )}
        <div className="absolute right-4 md:-bottom-20 md:inset-x-0">
          <NavBar
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
            closeMobileMenu={closeMobileMenu}
          />
        </div>
      </Container>
    </header>
  );
}
