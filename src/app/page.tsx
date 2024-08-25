import AboutUsMain from "@/views/about-us/about-us-main";
import HomeBlog from "@/views/home/blogs";
import Client from "@/views/home/clients";
import CompanyStatus from "@/views/home/company-status";
import SliderComponent from "@/views/home/hero";
import HomeService from "@/views/home/services"; 
import HomeTeam from "@/views/home/team";
import Testimonial from "@/views/home/testimonials";
export default function Home() {
  return (
    <>
      <div>
        <SliderComponent />
      </div>
      <div>
        <AboutUsMain home={true} />
      </div>
      <div>
        <HomeService />
      </div>
      <div>
        <HomeTeam />
      </div>
      <div>
        <CompanyStatus />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <HomeBlog />
      </div>
      <div>
        <Client />
      </div>
    </>
  );
}
