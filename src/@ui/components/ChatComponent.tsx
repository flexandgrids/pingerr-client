import { useState, useEffect, useRef } from "react";
import { Icons } from "../shared/icons";
import { chatData } from "../utils/chatData"; // Assuming this contains chat history
import axios from "axios";
import { geminiKey, gptKey } from "@/@core/config/secrets";

interface ChatComponentProps {
  chatId: string | number;
  isAI: boolean;
}

const ChatComponent: React.FC<ChatComponentProps> = ({ chatId, isAI }) => {
  const [messages, setMessages] = useState<
    {
      msgId: string;
      senderId: number;
      message: string;
      sentOn: string;
      deliveredOn: string;
    }[]
  >([]);
  const [inputMessage, setInputMessage] = useState("");

  // const [messages, setMessages] = useState<MessageType[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null); // Reference to last message

  // Auto-scroll to the latest message whenever `messages` updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!isAI) {
      // Fetch existing user chat messages
      const chatHistory = chatData.find((chat) => chat.id === chatId);
      if (chatHistory) {
        // setMessages();
      }
    } else {
      setMessages([]);
    }
  }, [chatId, isAI]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Append user message to chat
    const newMessage = {
      msgId: Date.now().toString(),
      senderId: 2, // 2 represents the current user
      message: inputMessage,
      sentOn: new Date().toISOString(),
      deliveredOn: "",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage("");

    if (isAI) {
      try {
        console.log("Sending request to Gemini AI...");

        const response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
          {
            contents: [
              {
                role: "user",
                parts: [{ text: inputMessage }],
              },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Response:", response.data); // Debugging API response

        // Extract AI response correctly
        const aiMessageContent =
          response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "AI did not respond.";

        const aiMessage = {
          msgId: Date.now().toString() + "-ai",
          senderId: 1, // AI sender
          message: aiMessageContent,
          sentOn: new Date().toISOString(),
          deliveredOn: "",
        };

        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error: any) {
        console.error(
          "Error fetching AI response:",
          error.response?.data || error.message
        );

        // Error message in chat UI
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            msgId: Date.now().toString() + "-error",
            senderId: 1,
            message: "AI is not responding. Please try again later.",
            sentOn: new Date().toISOString(),
            deliveredOn: "",
          },
        ]);
      }
    }
  };

  return (
    <div className="flex flex-col justify-start gap-3">
      <div className="h-[610px] flex flex-col">
        {/* Chat Messages */}
        <div className="flex flex-col max-h-[100%] overflow-y-scroll rounded-lg h-auto flex-grow custom-scrollbar p-3">
          {messages.map((message) => (
            <div
              key={message.msgId}
              className={`${
                message.senderId === 1
                  ? "recieved-msg justify-start"
                  : "sent-msg justify-end"
              } mb-1 flex items-end`}
            >
              <div className="max-w-[300px] flex flex-col items-start justify-start text-sm p-3 rounded-lg break-words">
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
                  ) : (
                    <Icons.sent className="text-[15px] ml-1" />
                  )}
                </span>
              </div>
            </div>
          ))}

          {/* Invisible div for auto-scrolling */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="w-full shadow-sm flex items-center justify-between px-3 h-[55px] bg-white rounded-lg">
        <button>
          <Icons.clip className="text-xl text-gray-600" />
        </button>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Write a message.."
          className="outline-none text-black text-sm w-full h-[40px] px-3"
        />
        <div className="flex justify-between items-center gap-4">
          {chatId !== "ai" && (
            <>
              <button>
                <Icons.mic className="text-xl text-gray-600" />
              </button>
              <button>
                <Icons.selectImage className="text-xl text-gray-600" />
              </button>
            </>
          )}

          <button
            onClick={handleSendMessage}
            className="p-3 bg-gray-100 rounded-lg"
          >
            <Icons.messageSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
