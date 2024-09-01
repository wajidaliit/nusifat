"use client";

import Container from "@/components/Container";
import { footerData } from "./Footerlinks";
import CommonImage from "@/components/CommonImage";
import Link from "next/link";
import ResuableInputField from "@/components/ResuableInputField";
import Button from "@/components/Button";
import rightUpArrow from '@/assets/header/rightUpArrow.svg'

export default function FooterThirdHome() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <Container className="py-4 md:py-10">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-11  gap-8 my-14">
          {/* About Section */}
          <div className=" lg:col-span-5 ">
            <div className="mb-8 md:mb-0">
              <Link href="/home" passHref>
                <CommonImage
                  src={footerData.logo}
                  alt="logo"
                  className="inline-block"
                  width={200}
                  height={200}
                />
              </Link>
              {/* Assuming you have the logo */}
              <p className="mb-4 md:mb-2 md:max-w-sm md:pe-4 text-lg text-cool-grey">
                {footerData.aboutText}
              </p>
            </div>
            <div className="flex flex-col ">
              <div className="space-y-5 ">
                {footerData.contactInfo.map((info, idx) => (
                  <div key={idx} className="text-lg flex items-start">
                    <div className="mr-3 bg-ferrari-red p-2 flex-shrink-0 rounded-full ">
                      {info.icon}
                    </div>{" "}
                    <p className="flex-1">{info.data}</p>
                  </div>
                ))} 
              </div>
            </div>
          </div>
          <hr className="sm:hidden" />

          {/* Link Sections */}
          {footerData.sections.map((section, index) => (
            <div key={index} className="lg:col-span-3 ">
              <h2 className="text-lg font-bold mb-4 uppercase">
                {section.title}
              </h2>
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
              </ul>
              <hr className="w-full mt-10 sm:hidden" />
            </div>
          ))}
          <div className="lg:col-span-3  flex flex-col gap-10">
            <h1 className="text-lg font-bold uppercase">
              {footerData?.newsLetter?.title}
            </h1>
            <p className="text-cool-grey">
              {" "}
              {footerData?.newsLetter?.description}
            </p>
            <div className=" relative">
              <ResuableInputField type="text" placeholder="*Enter Address" className="rounded-full" />
              <Button icon={rightUpArrow} className="absolute top-2 right-2 rounded-full" 
              style={{ padding: '10px' }}
              />
            </div>
          </div>
        </div>
        {/* Copyright Section */}
      </Container>
      <div className="text-center bg-[#171717] py-4">
        <p>{footerData.copyRight}</p>
      </div>
    </footer>
  );
}
