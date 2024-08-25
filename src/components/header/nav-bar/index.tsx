"use client";
import React, { useState } from "react";
import Link from "next/link";
import navLinks from "./NavLinks";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons from react-icons
import Button from "@/components/Button";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-1 md:p-4 relative w-full">
      {/* Mobile Menu Button */}
      <div className="block md:hidden">
        <Button onClick={toggleMobileMenu} className=" text-2xl">
          {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </Button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex bg-ferrari-red mx-24" >
        <Container className="flex gap-10 place-content-cent  text-white py-4">
          {navLinks?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`uppercase gap-4 font-medium text-xl md:text-2xl ${pathName === item.href ? "text-black" : ""}`}
            >
              <span
                className={`flex items-center ${pathName === item.href ? "text-black" : ""}`}
              >
                {item.name}
                <span
                  className={`ml-2 ${pathName === item.href ? "rotate-180" : ""}`}
                >
                  {item.icon}
                </span>
              </span>
            </Link>
          ))}
        </Container>
      </div>

      {/* Mobile Menu Items */}
      <div
  className={`absolute right-12  top-full p-12 bg-cool-grey bg-opacity-70 md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
>
  <Container className="flex flex-col gap-4 text-white py-4">
    {navLinks?.map((item, index) => (
      <Link
        key={index}
        href={item.href}
        className={`uppercase gap-4 font-medium text-xl ${pathName === item.href ? "text-black" : ""}`}
      >
        <span
          className={`flex items-center ${pathName === item.href ? "text-black" : ""}`}
        >
          {item.name}
          <span
            className={`ml-2 ${pathName === item.href ? "rotate-180" : ""}`}
          >
            {item.icon}
          </span>
        </span>
      </Link>
    ))}
  </Container>
</div>
    </nav>
  );
}
