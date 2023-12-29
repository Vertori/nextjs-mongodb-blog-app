import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row gap-[10px] items-center justify-center my-10 xl:mt-0">
      {/* text  */}
      <div className="flex flex-col gap-[50px]">
        <h1 className="text-5xl text-blue-500 font-semibold">
          Discover New Ideas
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi
          aliquam eum ducimus a saepe!
        </p>
        <div className="flex gap-4">
          <button className="p-4 bg-blue-500 hover:bg-blue-600 transition text-white rounded-md">
            Learn More
          </button>
          <button className="p-4 bg-white hover:bg-gray-300 transition text-black rounded-md">
            Contact
          </button>
        </div>
      </div>
      {/* image  */}
      <div>
        <Image src="/hero.gif" alt="hero image" width={500} height={400} />
      </div>
    </div>
  );
}
