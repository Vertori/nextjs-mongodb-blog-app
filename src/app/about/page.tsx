import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-12 justify-center items-center my-10 xl:mt-0 text-center sm:text-start">
      {/* text  */}
      <div className="flex flex-col gap-10 flex-1">
        <h1 className="text-5xl text-blue-500 font-semibold">About Us</h1>
        <h2 className="text-2xl">
          We create innovative solutions that are surprising and impressive
        </h2>
        <p className="text-lg">
          Our dedicated team consistently exceeds expectations by developing
          cutting-edge solutions that push the boundaries of innovation. With
          meticulous attention to detail and a forward-thinking mindset, we
          create surprising and impressive solutions. From concept to execution,
          our process is infused with creativity and expertise, delivering
          transformative experiences that captivate and inspire.
        </p>
        {/* boxes  */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 items-center text-center">
          {/* box 1 */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-blue-500 font-bold text-3xl">10+</h3>
            <p className="text-base">Years of Experience</p>
          </div>
          {/* box 2 */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-blue-500 font-bold text-3xl">100+</h3>
            <p className="text-base">Realised Projects</p>
          </div>
          {/* box 3  */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-blue-500 font-bold text-3xl">50+</h3>
            <p className="text-base">Satisfied Customers</p>
          </div>
        </div>
      </div>
      {/* image  */}
      <div className="">
        <Image src="/about.png" alt="about image" width={500} height={400} />
      </div>
    </div>
  );
};

export default AboutPage;
