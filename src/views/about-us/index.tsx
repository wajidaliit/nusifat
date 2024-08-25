 
import AboutUsMain from "./about-us-main";
import CoreFeature from "./core-feature";
import WeOffer from "./we-offer";

export default function About(): JSX.Element {
  return (
    <>
      <div>
        <AboutUsMain />
      </div>
      <div>
        <WeOffer />
      </div>
      <div>
        <CoreFeature />
      </div>
    </>
  );
}
