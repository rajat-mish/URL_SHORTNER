import React from 'react'

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="bg-white border border-b-black">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo/Name */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* You can replace this with your logo */}
              <span className="text-black-600 font-bold text-xl">URL Shortener</span>
            </div>
          </div>
          
          {/* Right side - Login button */}
          <div className="flex items-center">
            <button
              onClick={onLoginClick}
              className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar