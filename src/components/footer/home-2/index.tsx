"use client";

import Container from "@/components/Container";
import { footerData } from "./Footerlinks";
import CommonImage from "@/components/CommonImage";
import Link from "next/link";
import ResuableInputField from "@/components/ResuableInputField";
import Button from "@/components/Button";
import rightUpArrow from "@/assets/header/rightUpArrow.svg";

export default function FooterSecondHome() {
  return (
    <footer className="bg-[#121315] text-white">
      <Container className="py-4 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 my-14">
          {/* About Section */}
          <div className="">
            <div className="mb-8">
              <Link href="/home" passHref>
                <CommonImage
                  src={footerData.logo}
                  alt="logo"
                  className="inline-block"
                  width={200}
                  height={200}
                />
              </Link>
            </div>
            <div className="flex space-x-4">
              {footerData.socialMedia.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" p-2"
                >
                  {item.icon}
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
                {section.contactInfo && (
                  <div className="mt-4 space-y-5 ">
                    {section.contactInfo.map((info, idx) => (
                      <div key={idx} className="text-lg flex items-start">
                        <div className="mr-3 bg-ferrari-red p-1 flex-shrink-0">
                          {info.icon}
                        </div>{" "}
                        <p className="flex-1">{info.data}</p>
                      </div>
                    ))}
                  </div>
                )}
              </ul>
              <hr className="w-full mt-10 sm:hidden" />
            </div>
          ))}
          <div className=" flex flex-col gap-10">
            <h1 className="text-lg font-bold uppercase">
              {footerData?.newsLetter?.title}
            </h1>
            <p className="text-cool-grey">
              {" "}
              {footerData?.newsLetter?.description}
            </p>
            <div className=" relative">
              <ResuableInputField
                type="text"
                placeholder="*Enter Address"
                className=""
              />
              <Button
                icon={rightUpArrow}
                className="absolute top-2 right-2"
                style={{ padding: "10px" }}
              />
            </div>
          </div>
        </div>
        {/* Copyright Section */}
      </Container>
      <Container>
        <hr className="w-full border border-cool-grey" />
      </Container>
      <div className="text-center py-5">
        <p>{footerData.copyRight}</p>
      </div>
    </footer>
  );
}
