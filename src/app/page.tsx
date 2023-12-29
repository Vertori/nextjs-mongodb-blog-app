import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex md:flex-row gap-[100px]">
      <div className="flex-1 flex flex-col gap-[50px]">
        {/* text  */}
        <h1 className="text-[96px]">Discover New Ideas</h1>
        <p className="text-[20px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
          recusandae deserunt ex, quaerat amet rerum.
        </p>
        {/* buttons  */}
        <div className="flex gap-[20px]">
          <Link href="/about">
            <button className="p-[20px] cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 transition">
              Learn More
            </button>
          </Link>
          <Link href="/contact">
            <button className="p-[20px] cursor-pointer rounded-md bg-white text-black hover:bg-gray-300 transition">
              Contact
            </button>
          </Link>
        </div>
        {/* brands  */}
        <div className="w-[500px] h-[50px] relative">
          <Image src="/brands.png" alt="brands" fill className="brandImg" />
        </div>
      </div>
      {/* Hero gif  */}
      <div className="flex-1 relative hidden xl:block">
        <Image src="/hero.gif" alt="hero image" fill className="heroImg" />
      </div>
    </div>
  );
}
