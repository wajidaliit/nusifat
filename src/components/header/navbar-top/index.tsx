"use client";
import CommonImage from "@/components/CommonImage";
import Container from "@/components/Container";
import logo from "@/assets/header/logo.png";
import Navlinks from "./Navlinks";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; 
import { BsInfoCircleFill } from "react-icons/bs";

import NavBar from "../nav-bar";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleButton = () => {
    setOpen(!open);
  };
  return (
    <header>
      <Container className="flex justify-between items-center py-3 relative z-10">
        <div>
          <CommonImage src={logo} alt="logo" width={120} height={120} />
        </div>
        <div className="hidden md:block">
          <Navlinks />
        </div>
        <div className="block md:hidden absolute right-28 top-8">
          <button onClick={toggleButton} className="text-black text-2xl">
            {open ? <AiOutlineClose size="2.2rem" /> : <BsInfoCircleFill color="#E90000" size="2.2rem" />}
          </button>
        </div>
        {open && (
          <div className="absolute top-20 md:hidden bg-yellow-50 z-10 w-full">
            <Navlinks />
          </div>
        )}
        <div className="absolute right-4 md:-bottom-20 md:inset-x-0 ">
          <NavBar />
        </div>
      </Container>
    </header>
  );
}
