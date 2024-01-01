"use client";

import React, { useState } from "react";
import NavLink from "./navLink/navLink";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({ session }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  //TEMPORARY

  const isAdmin = true;

  return (
    <div className="container">
      <div className="items-center gap-[10px] hidden lg:flex  ">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink link={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className="p-[10px] font-bold cursor-pointer text-black bg-white  ">
                Logout
              </button>
            </form>
          </>
        ) : (
          <NavLink link={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className="block cursor-pointer lg:hidden transition-opacity text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenu />
      </button>

      {/* sidebar  */}
      <div
        className={`${
          isOpen ? "right-0 shadow-2xl" : "-right-full"
        } w-3/4 bg-yellow-400 fixed top-0 h-full md:w-[35vw] lg:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
      >
        <div
          className="absolute z-30 right-10 top-14 text-black text-4xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose />
        </div>
        <div className="h-full flex flex-col justify-center items-center gap-8">
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Links;
