import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import BotConfigPage from "./pages/BotConfigPage";
import ChatPage from "./pages/ChatPage";


const App = () => {
  
  // This is the main application component
  // It will render the BotConfigPage and the chatPage 
  
  const [botConfig, setBotConfig] = useState({});
  const [chatMessages, setChatMessages] = useState([]);
  const [logs, setLogs] = useState([]);


  return (
    <div className="bg-[url(/gradientBackground.png)] bg-cover bg-repeat-y bg-top min-h-screen w-full">
      
    <Routes>
      <Route path="/" element={<BotConfigPage onSave={setBotConfig} />} />
      <Route path="/chat" element={<ChatPage   botConfig={botConfig}
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            logs={logs}
            setLogs={setLogs}/>} />
    </Routes>
    </div>
  );
};

export default App;
