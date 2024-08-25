"use client";
import CommonImage from "@/components/CommonImage";
import Container from "@/components/Container";
import logo from "@/assets/header/logo.png";
import Navlinks from "./Navlinks";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 
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
        <div className="block md:hidden absolute right-28">
          <button onClick={toggleButton} className="text-black text-2xl">
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
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
