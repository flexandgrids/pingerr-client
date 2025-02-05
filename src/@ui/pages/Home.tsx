import { useState } from "react";
import ChatTile from "../components/ChatTile";
import { Icons } from "../shared/icons";
import { svgIcons } from "@/assets/svg.icons/svg.icons";
import ChatComponent from "../components/ChatComponent";
import userIcon from "../../assets/user-icon.svg";

const Home = () => {
  const [selectedChat, setSelectedChat] = useState<null | {
    id: string | number;
    senderName: string;
  }>(null);

  return (
    <div className="w-screen h-auto mt-3 gap-3 flex justify-center">
      <div className="w-[1000px] justify-between h-[800px] flex bg-white rounded-2xl shadow-sm p-5">
        {/* Sidebar */}
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

          {/* Chat List */}
          <div className="h-[552px] shadow-sm overflow-y-scroll custom-scrollbar mt-3 p-2 w-full rounded-lg bg-white">
            {/* AI Chat Button */}
            <div
              className="w-full mb-2 gap-1 shadow-sm cursor-pointer h-[60px] rounded-lg border flex justify-between items-center p-2"
              onClick={() =>
                setSelectedChat({ id: "ai", senderName: "Pingerr" })
              }
            >
              <div className="h-8 w-8 rounded-full">{svgIcons.aiIcon}</div>
              <div className="flex flex-col justify-center h-full w-[80%]">
                <button className="text-sm flex items-center gap-2 font-semibold">
                  Pingerr Bot <Icons.flash />
                </button>
              </div>
            </div>

            {/* User Chat List */}
            <ChatTile onSelectChat={(chat) => setSelectedChat(chat)} />
          </div>
        </div>

        {/* Chat Window (Right Side) */}
        <div className="h-full w-[650px] bg-gray-100 p-3 justify-between flex flex-col rounded-xl">
          {/* Show Chat Only If Selected */}
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <div className="w-full h-[50px] rounded-lg shadow-sm flex justify-between items-center px-2 bg-white">
                <div className="flex gap-2 items-center">
                  <div className="rounded-full bg-gray-100 h-7 w-7">
                    {selectedChat.id === "ai" ? (
                      <div className="h-7 w-7 rounded-full">
                        {svgIcons.aiIcon}
                      </div>
                    ) : (
                      <img src={userIcon} alt="user" className="rounded-full" />
                    )}
                  </div>
                  <h1 className="font-semibold text-sm">
                    {selectedChat.senderName}
                  </h1>
                  {selectedChat.id === "ai" ? (
                    <p className="text-xs text-blue-500">Bot</p>
                  ) : (
                    <p className="text-xs text-orange-500">away</p>
                  )}
                </div>
                <div className="flex gap-4 text-[#767676] items-center">
                  {selectedChat.id !== "ai" && (
                    <>
                      <Icons.call className="lg" />
                      <Icons.videoCall className="text-xl" />
                    </>
                  )}
                  <Icons.verticalDots />
                </div>
              </div>

              <div className="h-full justify-start flex pt-4 flex-col">
                <ChatComponent
                  chatId={selectedChat.id}
                  isAI={selectedChat.id === "ai"}
                />
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
