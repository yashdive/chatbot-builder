import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import ReactMarkdown from "react-markdown";

const ChatInterface = ({
  botConfig,
  chatMessages,
  setChatMessages,
  logs,
  setLogs,
}) => {
  // This component will handle the chat interface
  // It will display the chat messages and allow the user to send messages
  const GEMINI_API_URL = import.meta.env.VITE_GEMINI_API_URL;
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const [input, setInput] = useState("");

  const [isBotTyping, setIsBotTyping] = useState(false);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Step 1: Add user message
    const userMessage = { role: "user", content: input };
    setChatMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsBotTyping(true);

    try {
      // Step 2: Prepare payload for Gemini

    const fullPrompt = `You are a helpful AI chatbot named ${botConfig.botName}. You are acting as a ${botConfig.persona}. Answer the following: ${input}`;

    const payload = {
      contents: [
        {
          parts: [{ text: fullPrompt }],
        },
      ],
    };

      const res = await fetch(GEMINI_API_URL + GEMINI_API_KEY, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response from Gemini.";


      const botResponse = {
        role: "assistant",
        content: "",
      };

      setChatMessages((prev) => [...prev, botResponse]);

      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        currentIndex++;
        setChatMessages((prev) => {
          const updated = [...prev];
          const last = { ...updated[updated.length - 1] };
          last.content = text.slice(0, currentIndex);
          updated[updated.length - 1] = last;
          return updated;
        });

        if (currentIndex >= text.length) {
          clearInterval(typingInterval);
          setIsBotTyping(false);
        }
      }, 20); // Typing speed (adjust as needed)

      // Step 3: Update logs
      const now = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      })

      const newLog = {
        time: now,
        model: botConfig.model,
        prompt: input.length > 25 ? input.slice(0, 25) + "..." : input,
        response: text.length > 25 ? text.slice(0, 25) + "..." : text,
      };

      setLogs((prev) => [newLog, ...prev.slice(0, 4)]); // keep only last 5
    } catch (error) {
      console.error("Gemini error:", error);

      setChatMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Failed to get response from Gemini." },
      ]);
      setIsBotTyping(false);
    }

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) handleSend();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center max-w-3xl mx-auto p-8">
      <div className="backdrop-blur-2xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-4 text-green-500 flex items-center">
          <MessageSquare className="mr-2" />
          Let's Talk
        </h2>
        <div
          ref={chatContainerRef}
          className="h-[400px] overflow-y-auto border rounded-md p-4 mb-4 bg-gray-50 space-y-2"
        >
          <div className="flex flex-col gap-2">
            <AnimatePresence>
              {chatMessages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg shadow-md text-sm ${
                      message.role === "user"
                        ? "bg-green-100 text-right text-gray-900 rounded-br-none"
                        : "bg-blue-100 text-left text-gray-900 rounded-bl-none"
                    }`}
                  >
                    <strong className="block text-xs mb-1">
                      {message.role === "user" ? "You" : botConfig.botName}
                    </strong>
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            onClick={handleSend}
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
