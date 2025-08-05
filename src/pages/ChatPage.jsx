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

  <div className="flex flex-col md:flex-row transition-all duration-500 ease-in-out">
    <div
      className={`relative md:fixed top-16 z-30 bg-[url(/gradientBackground.png)] shadow-2xl transition-all duration-500 ease-in-out ${
        showLogs ? 'h-[calc(100vh-4rem)] md:w-80 w-full' : 'h-12 md:w-10 w-full'
      }`}
    >
      <button
        className="absolute md:-right-5 right-4 top-2 md:top-4 z-40 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-md shadow cursor-pointer"
        onClick={() => setShowLogs((prev) => !prev)}
      >
        <ClipboardList size={18} />
      </button>

      {showLogs && (
        <div className="p-4 pt-12 md:pt-4">
          <h2 className="text-lg font-semibold text-black-800 mb-2">Logs</h2>
          <LogPanel logs={logs} />
        </div>
      )}
    </div>

    <div
      className={`w-full transition-all duration-500 ease-in-out md:ml-[${
        showLogs ? '20rem' : '2.5rem'
      }]`}
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
</div>

  )
}

export default ChatPage
