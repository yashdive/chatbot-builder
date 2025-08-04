import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ChatInterface from '../components/ChatInterface'
import LogPanel from '../components/LogPanel'
import { ClipboardList } from 'lucide-react'

const ChatPage = ({ botConfig, chatMessages, setChatMessages, logs, setLogs }) => {

    //this is the Chat Page which will render the bot chat interface and the log panel components

  const [showLogs, setShowLogs] = useState(false)

  return (
    <div className="relative min-h-screen bg-[url(/gradientBackground.png)] bg-cover bg-repeat-y bg-top drop-shadow-lg">
      <Navbar />

      {/* Log Panel */}
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] z-30 bg-white-200 shadow-2xl transition-all duration-500 ease-in-out ${
          showLogs ? 'w-80' : 'w-10'
        }`}
      >
        <button
          className="absolute -right-5 top-4 z-40 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-md shadow transitio cursor-pointer"
          onClick={() => setShowLogs((prev) => !prev)}
        >
          <ClipboardList size={18} />
        </button>

        {/* Content only when open */}
        {showLogs && (
          <>
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Logs</h2>
            </div>
            <LogPanel logs={logs} />
          </>
        )}
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${
          showLogs ? 'ml-80' : 'ml-10'
        }`}
      >
        <ChatInterface
          botConfig={botConfig}
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
          logs={logs}
          setLogs={setLogs}
        />
      </div>
    </div>
  )
}

export default ChatPage
