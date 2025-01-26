import React from "react";
import ChatTile from "../components/ChatTile";
import { Icons } from "../shared/icons";
import { svgIcons } from "@/assets/svg.icons/svg.icons";
import ChatComponent from "../components/ChatComponent";
import userIcon from "../../assets/user-icon.svg";

const Home = () => {
  return (
    <div className="w-screen h-auto mt-3 flex justify-center">
      <div className="w-[1000px] justify-between h-[800px] flex bg-white rounded-2xl shadow-sm p-5">
        <div className="h-full p-3 w-[290px] bg-gray-100 rounded-xl">
          <div className="flex items-center gap-2 w-full justify-between">
            <div className="rounded-lg flex shadow-sm gap-3 items-center p-2 w-[80%] h-[40px] bg-white">
              <Icons.search className="text-[#767676]" />
              <input
                type="text"
                className="text-sm text-[#767676] outline-none"
                placeholder="Search Pingerrs.."
              />
            </div>
            <button className="rounded-lg cursor-pointer shadow-sm flex items-center justify-center w-[40px] h-[40px] bg-white">
              <Icons.newChat className="text-gray-500" />
            </button>
          </div>
          <div className="h-[552px] shadow-sm overflow-y-scroll custom-scrollbar mt-3 p-2 w-full rounded-lg bg-white">
            <div className="w-full mb-2 gap-1 shadow-sm cursor-pointer h-[60px] rounded-lg border flex justify-between items-center p-2">
              <div className="h-8 w-8 rounded-full">{svgIcons.aiIcon}</div>
              <div className="flex flex-col justify-center h-full w-[80%]">
                <h1 className="text-sm flex items-center gap-2 font-semibold">
                  Chat with Ai <Icons.flash />
                </h1>
              </div>
            </div>
            <ChatTile />
          </div>
          <div className="h-[55px] flex justify-between shadow-sm mt-3 p-2 w-full rounded-lg bg-white">
            <div className="w-[121px] shadow-sm h-[40px] bg-gray-100 rounded-lg flex items-center gap-2 justify-center text-sm">
              <Icons.arrowDown /> Archive
            </div>
            <div className="w-[121px] shadow-sm h-[40px] bg-gray-100 rounded-lg flex items-center gap-2 justify-center text-sm">
              <Icons.settings /> Settings
            </div>
          </div>
          <div className="h-[55px] flex justify-between items-center shadow-sm mt-3 p-2 w-full rounded-lg bg-white">
            <div className="w-[121px] text-gray-500 shadow-xs h-[40px] rounded-lg flex items-center gap-2 justify-center text-xs">
              {/* <Icons.arrowDown /> Profile */}
              version 0.0.1
            </div>
            <div className="w-[121px] text-red-500 shadow-sm h-[40px] bg-gray-100 rounded-lg flex items-center gap-2 justify-center text-sm">
              <Icons.logout /> Logout
            </div>
          </div>
        </div>
        <div className="h-full w-[650px] bg-gray-100 p-3 justify-between flex flex-col rounded-xl">
          <div className="w-full h-[50px] rounded-lg shadow-sm flex justify-between items-center px-2 bg-white">
            <div className="flex gap-2 items-center">
              <div className="rounded-full bg-gray-100 h-8 w-8">
                <img src={userIcon} alt="user" className="rounded-full" />
              </div>
              <h1 className="font-semibold text-sm">Ali Warraich</h1>
              {/* <p className="text-xs text-green-500">online</p> */}
              <p className="text-xs text-orange-500">away</p>
            </div>
            <div className="flex gap-4 text-[#767676] items-center">
              <Icons.call className="lg" />
              <Icons.videoCall className="text-xl" />
              <Icons.verticalDots />
            </div>
          </div>
          <div className="h-full justify-start flex flex-col py-3">
            <ChatComponent />
          </div>
          <div className="w-full shadow-sm flex items-center justify-between px-3 h-[55px] bg-white rounded-lg">
            <div className="flex gap-2 items-center">
              <Icons.clip className="text-[20px] text-[#767676]" />
              <input
                type="text"
                placeholder="Write a message.."
                className="outline-none text-black text-sm w-[350px] h-[40px]"
              />
            </div>
            <div className="flex items-center pl-2 gap-4 text-[#767676] text-[20px]">
              <Icons.code />
              <Icons.magic />
              <Icons.mic />
              <Icons.selectImage />
              <Icons.criclePlus />
              <div className="flex p-2 bg-gray-100 rounded-lg">
                <Icons.messageSend />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
