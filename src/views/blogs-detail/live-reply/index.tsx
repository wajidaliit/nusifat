import ResuableInputField from "@/components/ResuableInputField";
import { blogsDataDetail } from "../../../../data/blogs-data-detail";
import Button from "@/components/Button";

export default function LiveReply() {
  return (
    <>
      <h1 className="text-xl md:text-4xl font-bold">
        {blogsDataDetail?.blogdetailRelpy?.title}
      </h1>
      <h5 className="my-5">{blogsDataDetail?.blogdetailRelpy?.description}</h5>
      <form>
        <ResuableInputField type="textarea" placeholder="Enter your comment here!" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-9">
          <ResuableInputField placeholder="Name" type="input" />
          <ResuableInputField placeholder="Email" type="input" />
          <ResuableInputField placeholder="Website" type="input" />
        </div>
        <div className="flex items-center gap-3">
        <input type="checkbox" />
        <h5 className="my-5">{blogsDataDetail?.blogdetailRelpy?.checkPoint}</h5>
      </div>
      <Button type="submit">Post Comment</Button>
      </form>

    </>
  );
}
