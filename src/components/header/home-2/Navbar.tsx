"use client";
import React, { useState } from "react";
import Link from "next/link";
import navLinks from "./NavbarLinks";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "@/components/Button";
import CommonImage from "@/components/CommonImage";
import logo from "@/assets/home-2/header/logo.png";
import { IoIosArrowDown } from "react-icons/io";

interface NavBarProps {
  isOpen: boolean;
  toggle: () => void;
  closeNavbarTop: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isOpen, toggle, closeNavbarTop }) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const pathName = usePathname();

  // Handle menu open/close
  const handleMenuClick = () => {
    toggle();
    if (!isOpen) closeNavbarTop(); // Close NavbarTop when NavBar is opened
  };

  // Handle submenu toggle
  const handleSubMenuToggle = (itemName: string) => {
    setOpenSubMenu((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <nav className="relative w-full">
      {/* Mobile Menu Button */}
      <div className="block md:hidden absolute right-5 -top-[4rem]  z-10">
        <button onClick={handleMenuClick}>
          {isOpen ? (
            <AiOutlineClose size="2.2rem" color="#E90000" />
          ) : (
            <AiOutlineMenu size="2.2rem" color="#E90000" />
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <Container className="hidden md:flex justify-between items-center relative ">
        <div className="flex items-center justify-center gap-5">
          <CommonImage src={logo} alt="img" width={100} height={50} />
          {navLinks?.map((item, index) => (
            <div key={index} className="relative flex justify-end">
              {!item.subMenu ? (
                <Link
                  href={item.href}
                  className={`uppercase gap-4 font-medium text-xl ${
                    pathName === item.href ? "text-black font-bold" : ""
                  }`}
                >
                  <span className="flex items-center">{item.name}</span>
                </Link>
              ) : (
                <div>
                  <button
                    className={`uppercase gap-4 font-medium text-xl ${
                      pathName === item.href ||
                      (item.subMenu &&
                        item.subMenu.some(
                          (subItem) => pathName === subItem.href
                        ))
                        ? "text-black font-bold"
                        : ""
                    }`}
                    onClick={() => handleSubMenuToggle(item.name)}
                  >
                    <span className="flex items-center">
                      {item.name}
                      <span
                        className={`ml-2 text-black transform transition-transform duration-300 ${
                          openSubMenu === item.name ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <IoIosArrowDown />
                      </span>
                    </span>
                  </button>
                  {openSubMenu === item.name && (
                    <div className="absolute left-0 top-full w-max mt-2 bg-cool-grey bg-opacity-80 text-black py-2 shadow-lg rounded-b-xl z-10">
                      {item.subMenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className={`block px-4 py-2 hover:bg-ferrari-red hover:text-white text-xl font-semibold`}
                          onClick={handleMenuClick}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <Button className="uppercase">Get a Quote</Button>
      </Container>

      {/* Mobile Menu Items */}
      <div
        className={`fixed right-0 top-0 h-full w-full bg-cool-grey bg-opacity-90 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        <Container className="relative h-full flex flex-col gap-4 text-white py-4">
          {/* Close Button */}
          <Button
            onClick={handleMenuClick}
            className="absolute top-8 right-4 text-2xl"
          >
            <AiOutlineClose />
          </Button>

          {/* Mobile Menu Items */}
          <div className="flex flex-col mt-16">
            {navLinks?.map((item, index) => (
              <div key={index} className="my-2">
                {item.subMenu ? (
                  <div>
                    <button
                      className={`uppercase gap-4 font-medium text-xl min-w-40 w-56 text-center ${
                        pathName === item.href ||
                        (item.subMenu &&
                          item.subMenu.some(
                            (subItem) => pathName === subItem.href
                          ))
                          ? "text-black"
                          : ""
                      }`}
                      onClick={() => handleSubMenuToggle(item.name)}
                    >
                      <span className="flex items-center justify-between">
                        {item.name}
                        <span
                          className={`ml-2 transform transition-transform duration-300 ${
                            openSubMenu === item.name
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        >
                          <IoIosArrowDown />
                        </span>
                      </span>
                    </button>
                    {openSubMenu === item.name && (
                      <div className="pl-4 mt-2">
                        {item.subMenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className={`block text-xl font-medium ${
                              pathName === subItem.href ? "text-black" : ""
                            }`}
                            onClick={() => {
                              toggle(); // Close menu on link click
                            }}
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
                      pathName === item.href ? "text-black" : ""
                    }`}
                    onClick={handleMenuClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default NavBar;
