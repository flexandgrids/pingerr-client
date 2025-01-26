import { Icons } from "../shared/icons";
import { chat } from "../utils/chat";

const ChatComponent = () => {
  return (
    <div>
      {chat.messages.map((message) => (
        <div
          key={message.msgId}
          className={`${
            message.senderId === 1
              ? "recieved-msg justify-start"
              : "sent-msg justify-end"
          } mb-1 flex items-end`}
        >
          <div
            className={` max-w-[300px] flex flex-col items-start justify-start text-sm p-3 rounded-lg break-words`}
          >
            <span
              className={`${
                message.senderId === 1
                  ? "bg-white text-black"
                  : "bg-gray-200 text-black"
              } px-3 py-2 rounded-xl`}
            >
              {message.message}
            </span>
            <span
              className={`text-[10px] flex items-center w-full text-[#767676] ${
                message.senderId === 1 ? "justify-start" : "justify-end"
              }`}
            >
              {new Date(message.sentOn).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}

              {message.senderId === 1 ? (
                ""
              ) : message.deliveredOn.length !== 0 ? (
                <Icons.delivered className="text-[15px] ml-1" />
              ) : (
                <Icons.sent className="text-[15px] ml-1" />
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatComponent;
