import React from 'react'
import { useNavigate } from 'react-router-dom'

// Navbar component displays the top navigation bar with a logo
const Navbar = () => {
  // useNavigate hook from react-router-dom for programmatic navigation
  const navigate = useNavigate()

  return (
    // Main navbar container: fixed position, full width, blurred background, flex layout
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
      {/* Logo section: clicking navigates to the home page */}
      <div className='flex items-center cursor-pointer' onClick={() => navigate('/')}>
        {/* Logo text with styled spans */}
        <h1 className='text-3xl font-bold'>
          <span className='text-red-600'>Game</span>2
          <span className='text-red-600'>Learn</span>
        </h1>
      </div>
    </div>
  )
}

export default Navbar
