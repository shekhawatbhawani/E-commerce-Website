import React from 'react'

const Brands = ({name,img}) => {
  return (
    <div className='cursor-pointer '>
     
      <h1 className='bg-white rounded-lg shadow-lg text-center min-w-[300px] text-pink-600 px-4 py-3 hover:bg-gray-100'>{name}</h1>
    </div>
  )
}

export default Brands
