 
import { contactUsData } from "../../../../data/contact-us-data";

export default function IndustryContact() {
  return (
    <div>
      <p className="text-cool-grey">
        {contactUsData?.blogLinks?.quickListing?.description}
      </p>
      <div className="my-8 grid grid-cols-1 gap-4">
        {contactUsData?.blogLinks?.quickListing?.lists?.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div >{item.icon}</div>
            <div className="flex flex-col"> 
               <h3 className="text-xl text-ferrari-red">{item.name}</h3>
               <h5>{item.description}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
