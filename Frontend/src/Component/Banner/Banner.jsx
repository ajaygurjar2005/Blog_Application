

import React from 'react'

const Banner = () => {
  return (
    <div className="bg-gray-800 flex items-center justify-center h-[300px]">
      <div className="relative w-full max-w-screen-md">
        <img
          src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
          alt=""
          className="w-full h-[300px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-4xl font-bold">Blog Application</h2>
          <p className="mt-2 text-lg">By Ajay ...</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
