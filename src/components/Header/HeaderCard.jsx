import { Box } from '@mui/material'
import React from 'react'

const HeaderCard = ({info}) => {
  return (
    <Box  className={`p-6 mx-1 md:m-0 dark:text-[#ADB6BE]  dark:bg-[#0A1929] text-white md:w-[368px] ${info.id ===1&& 'bg-[#43baf6ea]'} ${info.id ===2&& 'bg-[#6687ffef]'} ${info.id ===3&& 'bg-[#9878fff5]'}`}>
        <p className='uppercase text-[13px] font-light'>{info.heading}</p>
        <h3 className='uppercase text-xl pb-4 dark:text-[#d3d7e1] font-bold'>{info.title}</h3>

        <p className='text-[12px]'>{info.description}</p>

        <button className='block uppercase hover:border-none border-b border-white transition duration-1000  pb-1 font-semibold text-[12px] pt-5'>{info.action}</button>

    </Box>
  )
}

export default HeaderCard