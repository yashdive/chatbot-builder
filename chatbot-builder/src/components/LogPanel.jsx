import React from 'react'

const LogPanel = ({ logs }) => {
  return (
    <div className=' flex flex-col justify-center max-w-3xl mx-auto p-8 backdrop-blur-2xl bg-white shadow-xl rounded-2xl m-50'>
        <h2 className='text-xl font-bold mb-4 text-purple-500'>Log Panel</h2>
        {logs.length === 0 ? (
            <p>No Logs yet. Start Chatting!</p>
        ) : (
            <ul>
                {logs.map((log, index) => (
                    <li
                    key={index}
                    className='flex justify-between items-center bg-gray-50 border rounded-md p-2 m-1'
                    >
                    <span className='w-24 text-gray-600'>{log.time}</span>
                    <span className='w-20 text-center bg-purple-100 text-purple-800 rounded-md px-2 py-0.5 text-xs font-semibold'>
                        {log.model}
                    </span>
                    <span className='flex-1 px-4 overflow-hidden truncate'>
                        <strong className='text-gray-800'>{log.prompt}</strong> 

                    </span>
                    <span className='flex-1 px-4 overflow-hidden truncate'>
                        <strong className='text-green-700'>{log.response}</strong>

                    </span>

                    </li>
        ))}
            </ul>
        )}
      
    </div>
  )
}

export default LogPanel
