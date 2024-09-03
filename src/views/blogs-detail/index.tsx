"use client";
import CommonImage from "@/components/CommonImage";
import { blogsDataDetail } from "../../../data/blogs-data-detail";
import Container from "@/components/Container";
import ReusableBlogLinks from "@/components/ReusableBlogLinks";
import LiveReply from "./live-reply";

export default function BlogsDetail() {
  return (
    <>
      <div className="bg-water">
        <Container className="py-16">
          <div className="text-ferrari-red flex items-center gap-4">
            <div className="h-px w-8 border border-ferrari-red" />
            <div className="text-xl font-medium">{blogsDataDetail.title}</div>
          </div>
          <h1 className="text-xl md:text-4xl font-semibold max-w-md mt-2 mb-16">
            {blogsDataDetail.subTitle}
          </h1>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8 ">
              <div className="w-full h-64 md:h-[28rem]">
                <CommonImage
                  src={blogsDataDetail?.blogdetailsItem?.img1}
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex items-center gap-2 my-4">
                {blogsDataDetail?.button}
                {blogsDataDetail?.date} / {blogsDataDetail?.user}
              </div>
              <hr className="w-full border border-ferrari-red" />
              <h5 className="mt-4">
                {blogsDataDetail?.blogdetailsItem?.description1}
              </h5>
              <h6 className="my-4">
                {blogsDataDetail?.blogdetailsItem?.description2}
              </h6>
              <p>{blogsDataDetail?.blogdetailsItem?.description3}</p>
              <div className="my-4 flex justify-center items-center">
                {blogsDataDetail?.icon}
              </div>
              <div className="pl-2 flex">
                <div className="w-8 md:w-4 bg-ferrari-red" />
                <h2 className="text-xl md:text-2xl font-bold bg-water pl-4 py-4">
                  {blogsDataDetail?.blogdetailsItem?.blogDescriptionTitle}
                </h2>
              </div>
              <h3 className="mt-4">
                {blogsDataDetail?.blogdetailsItem?.blogDescription1}
              </h3>
              <h2 className="text-xl font-bold mt-4">
                {blogsDataDetail?.blogdetailsItem?.blogTitle}
              </h2>
              <h4 className="mt-4">
                {blogsDataDetail?.blogdetailsItem?.blogDescription2}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="h-64 md:h-96 w-full">
                  <CommonImage
                    src={blogsDataDetail?.blogdetailsItem?.img2}
                    alt="img"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="h-64 md:h-96 w-full">
                  <CommonImage
                    src={blogsDataDetail?.blogdetailsItem?.img3}
                    alt="img"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h5 className="mt-4">
                {blogsDataDetail?.blogdetailsItem?.blogDescription3}
              </h5>
              <div className="my-6 grid grid-cols-1 gap-4">
                {blogsDataDetail?.blogdetailsItem?.blogPoint?.map(
                  (item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div>{item.icon}</div>
                      <h1 className="text-xl font-semibold">{item.title}</h1>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 ">
              <div>
                <ReusableBlogLinks
                  data={blogsDataDetail?.blogLinks?.recentListing}
                  className="border-2 border-cool-grey p-6"
                  recent={true}
                />
              </div>
              <div className="my-16">
                <ReusableBlogLinks
                  data={blogsDataDetail?.blogLinks?.categoryListing}
                  className="border-2 border-cool-grey p-6"
                  recent={false}
                />
              </div>
              <div>
                <ReusableBlogLinks
                  data={blogsDataDetail?.blogLinks?.quickListing}
                  className="border-2 border-cool-grey p-6"
                  recent={false}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container className="py-20">
        <LiveReply />
      </Container>
    </>
  );
}
