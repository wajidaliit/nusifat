"use client";

import Container from "../Container";
import { footerData } from "./Footerlinks";
import CommonImage from "../CommonImage";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 my-14">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <CommonImage src={footerData.logo} alt="logo" />{" "}
              {/* Assuming you have the logo */}
              <p className="mb-4 md:max-w-sm md:pe-4 text-lg text-cool-grey">
                {footerData.aboutText}
              </p>
            </div>
            <div className="flex space-x-4">
              {footerData.socialMedia.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CommonImage
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>
          <hr className="sm:hidden" />

          {/* Link Sections */}
          {footerData.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-bold mb-4">{section.title}</h2>
              <hr className="w-8  border border-ferrari-red my-6 border-opacity-60" />
              <ul>
                {section.links?.map((link, idx) => (
                  <li key={idx} className="mb-2 ">
                    <Link href={link.href}>
                      <span className="hover:underline text-lg">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
                {section.contactInfo && (
                  <div className="mt-4 space-y-5 max-w-52">
                    {section.contactInfo.map((info, idx) => (
                      <div key={idx} className="text-lg flex items-start">
                        <div className="mr-3 bg-ferrari-red p-0.5 flex-shrink-0">
                          <CommonImage src={info.icon} alt="icon" />
                        </div>{" "}
                        <p className="flex-1">{info.data}</p>
                      </div>
                    ))}
                  </div>
                )}
              </ul>
              <hr className="w-full sm:hidden" />
            </div>
          ))}
        </div>
        {/* Copyright Section */}
      </Container>
      <div className="text-center bg-gondola py-4">
        <p>{footerData.copyRight}</p>
      </div>
    </footer>
  );
}
