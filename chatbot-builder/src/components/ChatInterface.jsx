import React, { useState } from 'react'
  import { motion, AnimatePresence } from 'framer-motion';



const ChatInterface = ({botConfig, chatMessages, setChatMessages, logs, setLogs}) => {
    // This component will handle the chat interface
    // It will display the chat messages and allow the user to send messages

    const [input, setInput] = useState('');
    const handleSend = () => {
        if(!input.trim()) return; // Prevent sending empty messages

        const userMessage = {role: 'user', content: input};
        const systemMessage = {role: 'system', content: `You are a chatbot named ${botConfig.botName}, acting as a ${botConfig.persona} using the ${botConfig.model} model.`};

        //Step 1: Add the user message

        const newMessages = [...chatMessages, userMessage]

        //Step 2: Create bot mock response

        const botResponse = {
            role: 'assistant',
            content: `Mocked response for ${botConfig.model} for: "${input}"`
        }

        //Step 3: Add the bot response

        const updatedMessages = [...newMessages, botResponse];
        setChatMessages(updatedMessages);

        //Step 4: Log the interaction 
        const now = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        const truncatedPrompt = input.length > 25 ? input.slice(0, 25) + '...' : input;
        const truncatedResponse = botResponse.content.length > 25 ? botResponse.content.slice(0, 25) + '...' : botResponse.content;

        const newLog = {
            time: now,
            model: botConfig.model,
            prompt: truncatedPrompt,
            response: truncatedResponse
        };

        const updatedLogs = [newLog, ...logs].slice(0,5); // Keep only the last 5 logs
        setLogs(updatedLogs);

        setInput(''); // Clear the input field after sending
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && !e.shiftKey) handleSend();
    }


  return (

    <div className=' flex flex-col justify-center max-w-3xl mx-auto p-8 backdrop-blur-2xl bg-white shadow-xl rounded-2xl'>
      <h2 className='text-xl font-bold mb-4 text-green-500'>Chat</h2>
      <div className='h-[400px] overflow-y-auto border rounded-md p-4 mb-4 bg-gray-50 space-y-2'>

      <div className='flex flex-col gap-2'>

<AnimatePresence>
  {chatMessages.map((message, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-xs px-4 py-2 rounded-lg shadow-md text-sm ${
          message.role === 'user'
            ? 'bg-green-100 text-right text-gray-900 rounded-br-none'
            : 'bg-blue-100 text-left text-gray-900 rounded-bl-none'
        }`}
      >
        <strong className="block text-xs mb-1">
          {message.role === 'user' ? 'You' : botConfig.botName}
        </strong>
        <p>{message.content}</p>
      </div>
    </motion.div>
  ))}
</AnimatePresence>

  </div>
</div>
      <div className='flex gap-2'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Type your message...'
          className='flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400'
          required
        />
        <button
        className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition'
        onClick={handleSend}>
            Send
        </button>
      </div>
    </div>
  )
}

export default ChatInterface
