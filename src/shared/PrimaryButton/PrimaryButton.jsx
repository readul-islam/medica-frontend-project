import React from 'react'

const PrimaryButton = ({children}) => {
  return (
    <button className='text-white font-medium rounded-sm  py-2 uppercase px-6 hover:bg-[#43B9F6] bg-[#FE824C] text-base'>{children}</button>
  )
}

export default PrimaryButton