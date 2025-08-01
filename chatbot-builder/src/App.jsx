import React, { useState } from 'react'
import BotConfigForm from './components/BotConfigForm'
import ChatInterface from './components/ChatInterface';
import LogPanel from './components/LogPanel';
const App = () => {

  // This is the main application component
  // It will render the BotConfigForm component
  const [botConfig, setBotConfig] = useState({});
  const [chatMessages, setChatMessages] = useState([]);
  const [logs, setLogs] = useState([]);
  

  const handleSave = (config) => {
    console.log('Bot configuration saved:', config);
    setBotConfig(config);
  }

  return (
    <div>
      <BotConfigForm onSave={handleSave} />
      {botConfig && (
        <><ChatInterface
            botConfig={botConfig}
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            logs={logs}
            setLogs={setLogs} />
            <LogPanel logs={logs} /></>
      )}
    </div>
  )
}

export default App
