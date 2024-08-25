 
import { contactUsData } from "../../../../data/contact-us-data";

export default function IndustryInformation() {
  return ( 
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {contactUsData?.blogLinks?.industoryInformation?.lists?.map((item, index) => (
          <div key={index} className={`flex items-center justify-center py-12 px-16 gap-4 text-white ${item.bgColor}`}>
            <div >{item.icon}</div>
            <div className="flex flex-col"> 
               <p>{item.name}</p>
               <h2 className="text-xl font-bold">{item.description}</h2>
            </div>
          </div>
        ))}
      </div> 
  );
}
