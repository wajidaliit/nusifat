import Container from "@/components/Container";
import ReusableCard from "@/components/ReusableCard";
import { secondHomeBlogsData } from "../../../../data/home-2/blog-data";

export default function BlogsSecondHome() {
  return (
    <div className="">
      <Container className="py-10 ">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-4">
            <div className="border border-ferrari-red w-2 h-2 bg-ferrari-red" />
            <h3 className="uppercase text-xl text-cool-grey">LATEST BLOGS</h3>
            <div className="border border-ferrari-red w-2 h-2 bg-ferrari-red" />
          </div>
          <h5 className="text-xl md:text-4xl uppercase font-bold text-center">
            Artcles & Blog Posts
          </h5>
        </div>
        <div className="bg-white md:px-10 rounded-3xl mt-16">
          <ReusableCard
            data={secondHomeBlogsData?.cardItem}
            type="outlined"
            href="/blogs"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          />
        </div>
      </Container>
    </div>
  );
}
