import React from 'react'
import { ImGithub } from 'react-icons/im'
// Import Header Image




const HeaderSliderImage = ({img}) => {
  return (
      <div className="flex justify-center items-center py-4 w-full">
        <img
          className="w-full max-w-screen-md h-[200px] rounded-xl shadow-lg"
          src={img}
          alt="Product Banner"
        />
      </div> 
  )
}

export default HeaderSliderImage
