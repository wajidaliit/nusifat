import { contactUsData } from "../../../data/contact-us-data";
import Container from "@/components/Container";
import IndustryContact from "./industry-contact";
import ContactForm from "./form";
import ContactLocation from "./location";
import IndustryInformation from "./industry-information";

export default function ContactUs() {
  return (
    <div className="bg-water">
      <Container className="pt-16">
        <div className="text-ferrari-red flex items-center gap-4">
          <div className="h-px w-8 border border-ferrari-red" />
          <div className="text-xl font-medium">{contactUsData.title}</div>
        </div>
        <h1 className="text-2xl md:text-6xl font-semibold max-w-md my-2 ">
          {contactUsData.subTitle}
        </h1>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4 ">
            <IndustryContact />
          </div>
          <div className="col-span-12 md:col-span-8 ">
            <ContactForm />
          </div>
        </div>
        <div className="my-16">
          <ContactLocation />
        </div>
      </Container>
      <div className="px-4 bg-ferrari-red">
        <IndustryInformation />
      </div>
    </div>
  );
}
