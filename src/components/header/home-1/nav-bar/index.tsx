"use client";
import React, { useState } from "react";
import Link from "next/link";
import navLinks from "./NavLinks";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons from react-icons
import Button from "@/components/Button";
 

interface NavBarProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }) => { 
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const pathName = usePathname();



  const toggleSubMenu = (name: string) => {
    setActiveSubMenu(activeSubMenu === name ? null : name);
  };

  return (
    <nav className="p-1 md:p-4 relative w-full">
      {/* Mobile Menu Button */}
      <div className="block md:hidden">
        <button onClick={toggleMobileMenu} >
          {isMobileMenuOpen ? <AiOutlineClose color="#E90000" size="2.2rem" /> : <AiOutlineMenu color="#E90000" size="2.2rem" />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex bg-ferrari-red mx-24 relative">
        <Container className="flex gap-10 place-content-center text-white py-[1.11rem]">
          {navLinks?.map((item, index) => (
            <div key={index} className="relative">
              {!item.subMenu ? (
                // Regular link for items without submenu
                <Link
                  href={item.href}
                  className={`uppercase gap-4 font-medium text-xl ${
                    pathName === item.href ? "text-black font-bold" : ""
                  }`}
                >
                  <span className="flex items-center">{item.name}</span>
                </Link>
              ) : (
                // Dropdown logic for items with submenu
                <>
                  <button
                    className={`uppercase gap-4 font-medium text-xl  ${
                      pathName === item.href ||
                      (item.subMenu &&
                        item.subMenu.some((subItem) => pathName === subItem.href))
                        ? "text-black font-bold"
                        : ""
                    }`}
                    onClick={() => toggleSubMenu(item.name)}
                  >
                    <span className="flex items-center">
                      {item.name}
                      <span
                        className={`ml-2 ${
                          activeSubMenu === item.name ? "rotate-180" : ""
                        }`}
                      >
                        {item.icon}
                      </span>
                    </span>
                  </button>
                  {item.subMenu && activeSubMenu === item.name && (
                    <div className="absolute left-0 top-full w-max mt-2 bg-cool-grey bg-opacity-80 text-black py-2 shadow-lg rounded-b-xl ">
                      {item.subMenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-ferrari-red hover:text-white text-xl font-semibold"
                          onClick={() => setActiveSubMenu(null)}
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
        </Container>
      </div>

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
            className="absolute top-8 right-4 text-2xl"
          >
            <AiOutlineClose />
          </Button>

          {/* Menu Items */}
          <div className="flex flex-col mt-16">
            {navLinks?.map((item, index) => (
              <div key={index} className="my-2">
                {item.subMenu ? (
                  <div >
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
                      onClick={() => toggleSubMenu(item.name)}
                    >
                      <span className="flex items-center justify-between">
                        {item.name}
                        <span
                          className={`ml-2 ${
                            activeSubMenu === item.name ? "rotate-180" : ""
                          }`}
                        >
                          {item.icon}
                        </span>
                      </span>
                    </button>
                    {activeSubMenu === item.name && (
                      <div className="ml-4 mt-2">
                        {item.subMenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block text-lg py-1"
                            onClick={closeMobileMenu}
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
                    onClick={closeMobileMenu}
                  >
                    <span
                      className={`flex items-center ${
                        pathName === item.href ? "text-black" : ""
                      }`}
                    >
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

export default NavBar;