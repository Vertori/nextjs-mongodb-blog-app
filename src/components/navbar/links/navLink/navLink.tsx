"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface LinkProps {
  title: string;
  path: string;
}

const NavLink = ({ link }: { link: LinkProps }) => {
  const pathName = usePathname();
  return (
    <Link
      href={link.path}
      className={`min-w-[100px] p-[10px] rounded-[20px] font-medium text-center ${
        pathName === link.path && "text-black bg-white"
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
