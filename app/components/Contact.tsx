import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
export default function Contact() {

    const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "e3f1f205-63f8-496c-b914-38c1eacbe48c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div
      id="contact"
      className="w-full px-6 md:px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
      <h2 className="text-center text-4xl md:text-5xl font-ovo">
        Get in touch
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo px-4">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-8">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="p-2 border rounded font-ovo"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="p-2 border rounded font-ovo"
            required
          />
        </div>
        <textarea
          name="message"
          id="message"
          rows={6}
          placeholder="Enter your message"
          className="w-full p-2 border rounded font-ovo"
          required
        ></textarea>
        <button
          type="submit"
          className="w-max mt-3 py-3 px-4 flex items-center justify-between gap-2 bg-black/80 text-white rounded-full
          mx-auto hover:bg-black duration-500"
        >
          Submit now <Image src={assets.right_arrow_white} alt="arrow-right" className="w-4"/>
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
}
