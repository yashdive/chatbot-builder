import React, { useState } from 'react'
const BotConfigForm = ({onSave}) => {

    // This component will handle the bot configuration form


    const [botName, setBotName] = useState('');
    const [persona, setPersona] = useState('');
    const [model, setModel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission,
        // such as sending the data to a server or updating the state in a parent component.
        onSave({ botName, persona, model });

    }

  return (
    <form
        onSubmit={handleSubmit}
        className='bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm'
        >
        <h2 className='text-2xl font-bold mb-4'>Bot Configuration</h2>
        <label className='block mb-2 text-sm font-medium text-gray-700'>Bot name</label>
        <input
            className='w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
            placeholder='Enter bot name'
            required

            />
             <label className='block mb-2 text-sm font-medium text-gray-700'>Persona</label>
        <input
            className='w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={persona}
            onChange={(e) => setPersona(e.target.value)}
            placeholder='Enter bot persona'
            required

            />
             <label className='block mb-2 text-sm font-medium text-gray-700'>Model</label>
        <select className='w-full p-2 mb-4 border rounded-md'
        value={model}
        onChange={(e) => setModel(e.target.value)}
        >
            <option value=''>Select a model</option>
            <option value='GPT-4o'>GPT-4o</option>
            <option value='GPT-3.5'>GPT-3.5</option>

        </select>

        <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer'>
            Save Configuration
        </button>
    </form>
  )
}

export default BotConfigForm
