import React from 'react'

const PrimaryButton = ({children}) => {
  return (
    <button className='text-white font-medium rounded-sm  py-2 uppercase px-6 hover:bg-[#43B9F6] dark:hover:bg-[#FE824C]  bg-[#FE824C] dark:bg-[#43B9F6] text-base'>{children}</button>
  )
}

export default PrimaryButton