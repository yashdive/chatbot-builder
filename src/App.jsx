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


  // Render the main application UI
  return (
    // Set a background image 
    <div className="bg-[url(/gradientBackground.png)] bg-cover bg-repeat-y bg-top min-h-screen w-full">
      {/* Define application routes */}
      <Routes>
        {/* Route for the bot configuration page; passes setBotConfig to save config */}
        <Route path="/" element={<BotConfigPage onSave={setBotConfig} />} />
        {/* Route for the chat page; passes botConfig, chatMessages, setChatMessages, logs, and setLogs as props */}
        <Route
          path="/chat"
          element={
            <ChatPage
              botConfig={botConfig}
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
              logs={logs}
              setLogs={setLogs}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
