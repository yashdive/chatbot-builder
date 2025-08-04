import React, { useState } from 'react'
import {Bot} from 'lucide-react'
import { useNavigate } from 'react-router-dom';


const BotConfigForm = ({onSave}) => {

    // This component will handle the bot configuration form


    const [botName, setBotName] = useState('');
    const [persona, setPersona] = useState('');
    const [model, setModel] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would  handle the form submission,
        // such as sending the data to a server or updating the state in a parent component.
        onSave({ botName, persona, model });
    }

  return (
    <form
        onSubmit={handleSubmit}
        className='min-h-screen flex flex-col justify-center max-w-3xl mx-auto p-8'
        >
        <div className='backdrop-blur-2xl bg-white shadow-xl rounded-2xl p-8'>
        <h2 className='text-blue-500 text-2xl font-bold mb-4 flex items-center'><Bot className='mr-2' />Build Your Bot</h2>
        <label className='block mb-2 text-sm font-medium text-gray-700'>Bot Name</label>
        <input
            className='w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
            placeholder='Enter bot name'
            required

            />
             <label className='block mb-2 text-sm font-medium text-gray-700'>Bot Persona</label>
        <input
            className='w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={persona}
            onChange={(e) => setPersona(e.target.value)}
            placeholder='Enter bot persona'
            required

            />
             <label className='block mb-2 text-sm font-medium text-gray-700'>Pick a Brain</label>
        <select className='w-full p-2 mb-4 border rounded-md'
        value={model}
        onChange={(e) => setModel(e.target.value)}
        >
            <option value=''>Select a model</option>
            <option value='gemini-pro'>Gemini-Pro</option>
            <option value='GPT-4o'>GPT-4o</option>
            <option value='GPT-3.5'>GPT-3.5</option>

        </select>

        <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer'>
            Save Configuration
        </button>
        </div>
    </form>
  )
}

export default BotConfigForm
