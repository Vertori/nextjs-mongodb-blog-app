import Image from "next/image";
import React from "react";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row justify-center items-center gap-[50px] my-10 ">
      {/* Image container  */}
      <div className="flex-1">
        <Image
          className=""
          src="https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="blog image"
          width={500}
          height={500}
        />
      </div>
      {/* Text container  */}
      <div className="flex flex-[2] flex-col gap-[50px]">
        <h1 className="text-[48px] md:text-[64px] text-blue-500 font-semibold">
          Title
        </h1>
        {/* Details container*/}
        <div className="flex gap-[20px]">
          {/* Avatar  */}
          <Image
            className="object-cover rounded-[50%]"
            src="https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user avatar"
            width={50}
            height={50}
          />
          {/* Author details text  */}
          <div className="flex flex-col gap-[10px]">
            <span className="font-bold">Author</span>
            <span className="text-gray-300">Bruce Wayne</span>
          </div>
          {/* Author details published at */}
          <div className="flex flex-col gap-[10px]">
            <span className="font-bold">Published</span>
            <span className="text-gray-300">10.10.2020</span>
          </div>
        </div>
        {/* Description  */}
        <div className="text-lg font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque
          esse non iste, voluptatum quis quo? Suscipit consectetur similique
          dignissimos ad deserunt dicta quidem soluta amet in doloribus! Porro
          sit deserunt tempore suscipit consequuntur alias, iusto recusandae
          enim similique laudantium, soluta assumenda modi ut sed rem impedit
          aliquam, laborum reprehenderit.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
