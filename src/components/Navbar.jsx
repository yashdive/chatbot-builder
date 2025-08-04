import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  //This is the navbar component which contains the logo

  const navigate = useNavigate()
  return (
      <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
      <div className=' flex items-center cursor-pointer' onClick={() => navigate('/')}>
        <h1 className='text-3xl font-bold'><span className='text-red-600'>Game</span>2<span className='text-red-600'>Learn</span></h1>
    </div>


    </div>
  )
}

export default Navbar
