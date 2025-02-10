import { useState, useEffect, useRef } from "react";
import { OpenAI } from "openai"; // ✅ Correct Import for OpenAI SDK
import { Icons } from "../shared/icons";
import { chatData } from "../utils/chatData";
import axios from "axios";
import { geminiKey, openAiKey } from "@/@core/config/secrets";
import { formatText } from "../utils/textFormatter";
import { users } from "../utils/dummyUsers";
import { svgIcons } from "@/assets/svg.icons/svg.icons";

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
      image?: string;
    }[]
  >([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!isAI) {
      const chatHistory = chatData.find((chat) => chat.id === chatId);
    } else {
      setMessages([]);
    }
  }, [chatId, isAI]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      msgId: Date.now().toString(),
      senderId: 2,
      message: inputMessage,
      sentOn: new Date().toISOString(),
      deliveredOn: "",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage("");

    if (isAI) {
      try {
        let aiMessageContent = "AI did not respond.";
        let imageUrl = null;

        // **Detect if User Wants an Image**
        // if (
        //   inputMessage.toLowerCase().startsWith("show me") ||
        //   inputMessage.toLowerCase().startsWith("generate an image")
        // ) {
        //   console.log("📷 Requesting AI-generated image from OpenAI DALL·E...");

        //   // **OpenAI DALL·E Image Generation**
        //   const openai = new OpenAI({
        //     apiKey: openAiKey,
        //     dangerouslyAllowBrowser: true,
        //   });

        //   const numberOfImages = 1;
        //   const imageSize = "1024x1024";

        //   const imageResponse = await openai.images.generate({
        //     model: "dall-e-3",
        //     prompt: inputMessage,
        //     n: numberOfImages,
        //     size: imageSize,
        //   });

        //   console.log("✅ AI Image Response:", imageResponse);

        //   // **Extract Image URL**
        //   if (imageResponse.data.length > 0) {
        //     imageUrl = imageResponse.data[0].url;
        //   }

        //   aiMessageContent = "Here is your AI-generated image:";
        // } else {
        // console.log("💬 Requesting Gemini AI text response...");

        // **Google Gemini AI Text Generation**
        const textResponse = await axios.post(
          `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
          {
            contents: [{ role: "user", parts: [{ text: inputMessage }] }],
          },
          { headers: { "Content-Type": "application/json" } }
        );

        const aiContent =
          textResponse.data.candidates?.[0]?.content?.parts || [];
        aiContent.forEach((part: any) => {
          if (part.text) {
            aiMessageContent = part.text;
          }
        });
        // }

        // **Store AI Response**
        const aiMessage = {
          msgId: Date.now().toString() + "-ai",
          senderId: 1,
          message: aiMessageContent,
          image: imageUrl || undefined,
          sentOn: new Date().toISOString(),
          deliveredOn: "",
        };

        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error: any) {
        console.error(
          "❌ Error fetching AI response:",
          error.response?.data || error.message
        );

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
              <div className="max-w-[400px] flex flex-col items-start justify-start text-sm p-3 rounded-lg break-words">
                <div className="flex items-end w-full gap-1">
                  {chatId === "ai" && message.senderId !== 2 && (
                    <span className="min-w-4 h-4 mb-1">{svgIcons.aiIcon}</span>
                  )}
                  <span
                    className={`${
                      message.senderId === 1
                        ? "bg-white text-black"
                        : "bg-gray-200 text-black"
                    } px-3 py-2 rounded-xl`}
                  >
                    {formatText(message.message)}
                  </span>
                </div>

                {/* **Display Image if Available** */}
                {message.image && (
                  <img
                    src={message.image}
                    alt="AI Generated"
                    className="w-full rounded-md mt-2"
                  />
                )}

                {chatId !== "ai" && (
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
                )}
              </div>
            </div>
          ))}

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
        <button
          onClick={handleSendMessage}
          className="p-3 bg-gray-100 rounded-lg"
        >
          <Icons.messageSend />
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
