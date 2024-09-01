"use client";
import ReusableCard from "@/components/ReusableCard";
import Container from "@/components/Container";
import { secondHomeServicesData } from "../../../../data/home-2/services-data";
import Button from "@/components/Button";

export default function ServiceSecondHome() {
  return (
    <div className="">
      <Container className="py-10">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="border border-ferrari-red w-2 h-2 bg-ferrari-red" />
              <h3 className="uppercase text-cool-grey">WHAT WE OFFER</h3>
            </div>
            <p className="text-xl md:text-2xl uppercase font-bold md:max-w-sm">
              WE PROVIDE EXCELLENT SERVICES TO OUR CUSTOMERS
            </p>
          </div>
          <Button href="/services" className="uppercase mt-2 md:mt-0">Views All Services</Button>
        </div>
        <ReusableCard
          type="basic"
          data={secondHomeServicesData?.cardItem?.slice(0, 3)}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6  "
          cardClass={(item) =>
            `border p-6 ${item?.buttonBg === "secondary" ? "border-ferrari-red" : "border-cool-grey"}`
          }
          titleClass={(item) =>
            `${item?.buttonBg === "secondary" ? "text-ferrari-red" : ""}`
          }
          href="/services/"
          bodyClass="mt-7"
        />
      </Container>
    </div>
  );
}
