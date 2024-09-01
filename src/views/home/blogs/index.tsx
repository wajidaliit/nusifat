import ReusableCard from "@/components/ReusableCard";
import Container from "@/components/Container";
import { blogsData } from "../../../../data/blogs-data";

export default function HomeBlog() {
  return (
    <div className="bg-water">
      <Container className="py-10">
        <h2 className="text-xl text-ferrari-red uppercase font-medium text-center">
          logs
        </h2>
        <p className="text-xl md:text-4xl uppercase text-center font-bold mt-3 mb-14">
          Latest Blogs
        </p>
        <ReusableCard
          type="basic"
          data={blogsData?.cardItem?.slice(0, 3)}
          href="/blogs/"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          bodyClass="p-10"
        />
      </Container>
    </div>
  );
}
