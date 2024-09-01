"use client";
import React, { useState } from "react";
import Link from "next/link";
import navLinks from "./NavbarLinks";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "@/components/Button";
import CommonImage from "@/components/CommonImage";
import logo from "@/assets/home-3/header/logo.png";
import { IoIosArrowDown } from "react-icons/io";

interface NavBarProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function NavBar({ isMobileMenuOpen, toggleMobileMenu }: NavBarProps) {
  const pathName = usePathname();

  // State to keep track of the open submenu
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  // Function to toggle submenus
  const handleSubMenuToggle = (index: number) => {
    setOpenSubMenu((prev) => (prev === index ? null : index));
  };

  return (
    <nav className="p-1 md:p-0 relative w-full ">
      {/* Mobile Menu Button */}
      <div className="block md:hidden absolute right-10 -top-[8.2rem] ">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <AiOutlineClose size="2.2rem" />
          ) : (
            <AiOutlineMenu size="2.2rem" />
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <Container className="hidden md:flex justify-between items-center relative">
        <div>
          <CommonImage src={logo} alt="img" width={100} height={50} />
        </div>
        <div className="flex items-center justify-center gap-5 ">
          {navLinks?.map((item, index) => (
            <div key={index} className="relative flex justify-end">
              {!item.subMenu ? (
                <Link
                  href={item.href}
                  className={`uppercase gap-4 font-medium text-xl ${
                    pathName === item.href ? "text-peach-yellow font-bold" : ""
                  }`}
                >
                  <span className="flex items-center">{item.name}</span>
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => handleSubMenuToggle(index)}
                    className={`uppercase gap-4 font-medium text-xl ${
                      pathName === item.href ||
                      (item.subMenu &&
                        item.subMenu.some(
                          (subItem) => pathName === subItem.href
                        ))
                        ? "text-peach-yellow font-bold"
                        : ""
                    }`}
                  >
                    <span className="flex items-center">
                      {item.name}
                      <span
                        className={`ml-2 text-peach-yellow transform transition-transform duration-300 ${
                          openSubMenu === index ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <IoIosArrowDown />
                      </span>
                    </span>
                  </button>
                  {item.subMenu && openSubMenu === index && (
                    <div className="absolute left-0 top-full w-max mt-2 bg-cool-grey bg-opacity-80 text-black py-2 shadow-lg rounded-b-xl">
                      {item.subMenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-ferrari-red hover:text-white text-xl font-semibold"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </Container>

      {/* Mobile Menu Items */}
      <div
        className={`fixed right-0 top-0 h-full w-full bg-cool-grey bg-opacity-90 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <Container className="relative h-full flex flex-col gap-4 text-white py-4">
          {/* Close Button */}
          <Button
            onClick={toggleMobileMenu}
            className="absolute top-8 right-8 text-2xl"
          >
            <AiOutlineClose />
          </Button>

          {/* Menu Items */}
          <div className="flex flex-col mt-16">
            {navLinks?.map((item, index) => (
              <div key={index} className="my-2">
                {item.subMenu ? (
                  <div>
                    <button
                      onClick={() => handleSubMenuToggle(index)}
                      className={`uppercase gap-4 font-medium text-xl min-w-40 w-56 text-center ${
                        pathName === item.href ||
                        (item.subMenu &&
                          item.subMenu.some(
                            (subItem) => pathName === subItem.href
                          ))
                          ? "text-peach-yellow"
                          : ""
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        {item.name}
                        <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            openSubMenu === index ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          <IoIosArrowDown />
                        </span>
                      </span>
                    </button>
                    {openSubMenu === index && (
                      <div className="ml-4 mt-2">
                        {item.subMenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block text-lg py-1"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`uppercase font-medium text-xl min-w-40 w-56 text-center ${
                      pathName === item.href ? "text-peach-yellow" : ""
                    }`}
                  >
                    <span className={`flex items-center`}>
                      {item.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </nav>
  );
}
