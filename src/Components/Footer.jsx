import React from 'react'
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-gray-800 text-white text-center py-4 mt-10">
        <div className='flex flex-col items-center'>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub className='text-2xl mb-2 cursor-pointer' />
        </a>
      <p>&copy; 2025 My ToDo App. Created By Manish.</p>
      </div>
    </div>
  )
}

export default Footer