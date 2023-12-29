import React from "react";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="h-[100px] flex items-center justify-between">
      <div className="text-[30px] font-bold">Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
