// app/not-found.tsx
import Button from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500">
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-red-600">404 ERROR</h1>
        <p className="text-lg mt-4 mb-8 text-gray-700">
          Sorry, we couldn&apos;t find what you are looking for..
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <Button className="">BACK TO HOME</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
