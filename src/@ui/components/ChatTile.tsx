import { Icons } from "../shared/icons";
import { chatData } from "../utils/chatData";
import userIcon from "../../assets/user-icon.svg";

interface ChatTileProps {
  onSelectChat: (chat: {
    id: string;
    senderName: string;
    message: string;
  }) => void;
}

const ChatTile: React.FC<ChatTileProps> = ({ onSelectChat }) => {
  return (
    <>
      {chatData.length > 0 ? (
        chatData.map((chat, index) => (
          <div
            key={index}
            className="w-full cursor-pointer mb-2 gap-1 h-[60px] rounded-lg bg-gray-50 shadow-sm flex justify-between items-center p-2"
            onClick={() =>
              onSelectChat({
                id: chat.id.toString(),
                senderName: chat.senderName,
                message: chat.message,
              })
            }
          >
            <div className="h-8 w-8 rounded-full bg-gray-200">
              <img src={userIcon} alt="user" className="rounded-full" />
            </div>
            <div className="flex flex-col h-auto w-[80%]">
              <h1 className="text-sm font-semibold">{chat.senderName}</h1>
              <p className="text-xs font-normal text-[#767676]">
                {chat.message}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="flex w-full justify-center mt-20 text-sm items-center gap-1 text-gray-500">
          No messages <Icons.sad />
        </div>
      )}
    </>
  );
};

export default ChatTile;
