import React from 'react'

const Post = ({prop} ) => {
  
  return (
    <div className=" rounded overflow-hidden shadow-lg w-[90%] mt-4">
      <img
        className="w-full h-[200px]"
        src={prop.picture}
        alt=''
      />
      
      <div className="px-6 py-4">
      <div className='text-center'>{prop.categories}</div>
        <div className="font-bold text-xl mb-2">{prop.title}</div>
        <div>Author: <span>{prop.username}</span></div>
        <p className="text-gray-700 text-base">
          {prop.description}
        </p>
      </div>
      
    </div>

  )
}

export default Post
