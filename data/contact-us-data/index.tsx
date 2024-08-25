import { ReactNode } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { IoMdTimer } from "react-icons/io";

interface ListsTypes {
  icon: ReactNode;
  name: string;
  description: string;
}
interface QuickListingTypes {
  description: string;
  lists: ListsTypes[];
}

interface IndustoryListsTypes {
  icon: ReactNode;
  name: string;
  description: string;
  bgColor: string;
}

interface IndustoryInformationTypes {
  lists: IndustoryListsTypes[];
}

interface BlogLinksTypes {
  quickListing: QuickListingTypes;
  industoryInformation: IndustoryInformationTypes;
}

interface contactUsDataTypes {
  blogLinks: BlogLinksTypes;
  title: string;
  subTitle: string;
}

export const contactUsData: contactUsDataTypes = {
  title: "Contact Us",
  subTitle: "Get In Touch",

  blogLinks: {
    // Quick Links Section
    quickListing: {
      description:
        "Have questions about our industry marketing services? let's talk about how we can help you achieve your goals and take your business to the top!",
      lists: [
        {
          icon: <FaLocationDot size="2rem" color="#E90000" />,
          name: "Address",
          description: "22 Street, ABC Road, New York",
        },
        {
          icon: <MdOutlineMail size="2rem" color="#E90000" />,
          name: "Email",
          description: "info@nusifat.com",
        },
        {
          icon: <FaPhone size="2rem" color="#E90000" />,
          name: "Phone",
          description: "+92 21 35242589",
        },
        {
          icon: <BsWhatsapp size="2rem" color="#E90000" />,
          name: "Whatsapp",
          description: "+92 321 1254258",
        },
      ],
    },
    // industoryInformation Section
    industoryInformation: {
      lists: [
        {
          icon: <IoMdTimer size="3rem" />,
          name: "We are open monday-friday",
          description: "8:00 am - 7:00 pm",
          bgColor: "bg-gondola",
        },
        {
          icon: <FaPhone size="3rem"  />,
          name: "Have a question?",
          description: "+198 555 4584",
          bgColor: "bg-ferrari-red",
        },
        {
          icon: <FaLocationDot size="3rem"  />,
          name: "Location",
          description: "22 Street, ABC Road, New York",
          bgColor: "bg-gondola",
        },
      ],
    },
  },
};
