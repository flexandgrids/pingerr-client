import React from "react";
import { Icons } from "../shared/icons";
import logo from "../../assets/pingerr-logo.png";
import { svgIcons } from "@/assets/svg.icons/svg.icons";
import userIcon from "../../assets/user-icon.svg";

const Navbar = () => {
  return (
    <div className="w-screen h-[50px] flex justify-center mt-3">
      <div className="w-[1000px] flex rounded-full shadow-sm items-center px-5 justify-between h-full bg-white">
        <div className="h-auto w-auto">
          <img src={logo} alt="logo" className="w-[70px]" />
        </div>
        <div className="flex items-center gap-3">
          <Icons.notification className="text-lg text-gray-500" />
          <div className="w-8 h-8 rounded-full bg-gray-100">
            <img src={userIcon} alt="user" className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
