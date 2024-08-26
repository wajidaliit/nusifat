"use client";
import { useState } from "react";
import ReusableBlogLinks from "@/components/ReusableBlogLinks";
import { blogsData } from "../../../data/blogs-data";  
import Container from "@/components/Container";
import ReusableCard from "@/components/ReusableCard";
import Pagination from "@/components/Pagination";

export default function Blogs() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogsData.cardItem.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="bg-water">
      <Container className="py-16">
        <div className="text-ferrari-red flex items-center gap-4">
          <div className="h-px w-8 border border-ferrari-red" />
          <div className="text-xl font-medium">{blogsData.title}</div>
        </div>
        <h1 className="text-xl md:text-4xl font-semibold max-w-md mt-2 mb-16">
          {blogsData.subTitle}
        </h1>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 ">
            <ReusableCard
              data={currentItems}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              href="/blogs/"
            />
            {/* Pagination Component */}
            <Pagination
              totalItems={blogsData.cardItem.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
              className="mt-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 ">
            <div>
              <ReusableBlogLinks
                data={blogsData?.blogLinks?.recentListing}
                className="border-2 border-cool-grey p-6"
                recent={true}
              />
            </div>
            <div className="my-16">
              <ReusableBlogLinks
                data={blogsData?.blogLinks?.categoryListing}
                className="border-2 border-cool-grey p-6"
                recent={false}
              />
            </div>
            <div>
              <ReusableBlogLinks
                data={blogsData?.blogLinks?.quickListing}
                className="border-2 border-cool-grey p-6"
                recent={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
