import React from 'react'
import PrimaryButton from '../../shared/PrimaryButton'
import { services } from '../../utils/mockData'

const ServiceInfoCard = ({selected}) => {
  return (
    <div className='mt-16 flex lg:flex-row flex-col dark:text-[#d3d7e1] text-[rgb(74,82,93)] pb-10 gap-8 text-justify '>

    <img className='flex-shrink-0' src={selected.img} alt="" />
    <div>
     <h3 className='text-3xl font-semibold uppercase text-[rgb(74,82,93)] dark:text-[#d3d7e1]  pb-8'> {selected.title}</h3>
     <p className='font-semibold pb-2 uppercase'>About {selected.title}</p>
     <h4 className='pb-10 dark:text-[#b9bdc7]'>{selected.description}</h4>
     <PrimaryButton>
      Read More
     </PrimaryButton>
    </div>

    </div>
  )
}

export default ServiceInfoCard