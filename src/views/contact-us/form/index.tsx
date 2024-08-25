import Button from "@/components/Button";
import ResuableInputField from "@/components/ResuableInputField";
export default function ContactForm() {
  return (
    <form className="">
      <div className="grid grid-cols-2 gap-4">
        <ResuableInputField type="input" placeholder="Name" />
        <ResuableInputField type="email" placeholder="Email" />
        <ResuableInputField type="input" placeholder="Phone" />
        <ResuableInputField type="input" placeholder="Subject" />
      </div>
      <ResuableInputField type="textarea" placeholder="Message"  className="mt-4"/>

      <Button className="mt-4" type="submit">Send Message</Button>
    </form>
  );
}
