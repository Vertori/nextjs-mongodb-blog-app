import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Contact page",
  description: "This is contact page",
};

const ContactPage = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row gap-[10px] items-center justify-center my-10 xl:mt-0">
      {/* Image  */}
      <div className="flex-1">
        <Image
          src="/contact.png"
          alt="contact image"
          width={500}
          height={400}
        />
      </div>
      {/* Form  */}
      <div className="flex-1 w-full">
        <form className="flex flex-col gap-5">
          <input
            className="p-5 rounded-[5px] border-none outline-none bg-[#2d2b42]"
            type="text"
            placeholder="Full name"
          />
          <input
            className="p-5 rounded-[5px] border-none outline-none bg-[#2d2b42]"
            type="text"
            placeholder="E-mail address"
          />
          <input
            className="p-5 rounded-[5px] border-none outline-none bg-[#2d2b42]"
            type="text"
            placeholder="Phone Number"
          />
          <textarea
            className="p-5 rounded-[5px] border-none outline-none bg-[#2d2b42]"
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className="p-5 bg-blue-500 hover:bg-blue-600 transition text-white font-bold rounded-md cursor-pointer">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
