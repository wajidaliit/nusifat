"use client";
import Button from "@/components/Button";
import CommonImage from "@/components/CommonImage";
import NotFoundImage from "@/assets/404/404.png";
import ReusableSubHero from "@/components/ReusableSubHero";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <ReusableSubHero />
      <div className="relative w-full mx-auto h-96 md:h-screen bg-water">
        <div className="absolute inset-0">
          <CommonImage
            src={NotFoundImage}
            alt="404"
            className="w-full h-full bg-cover"
          />
        </div>
        <div className="relative text-center pt-28">
          <h1 className="text-4xl md:text-7xl font-bold text-red-600">404 ERROR</h1>
          <p className="text-lg md:text-xl mt-4 mb-8 text-gray-700">
            Sorry, we couldn&apos;t find what you are looking for..
          </p>
          <div className="flex justify-center">
            <Link href="/home">
              <Button className="">BACK TO HOME</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500">
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-red-600">404 ERROR</h1>
          <p className="text-lg mt-4 mb-8 text-gray-700">
            Sorry, we couldn&apos;t find what you are looking for..
          </p>
          <div className="flex justify-center">
            <Link href="/home">
              <Button className="">BACK TO HOME</Button>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
}
