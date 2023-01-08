import React, { useEffect, useState } from 'react'
import ServiceInfoCard from './ServiceInfoCard'
import ServicesView from './ServicesView'
import { services } from "../../utils/mockData";
import { Box, Container, Divider } from "@mui/material";
const Services = () => {
  const [selected, setSelected] = useState({})

  useEffect(()=>{
    setSelected(services[0])
  },[])
  return (<>
  <Container maxWidth="xl">
    <div className="md:px-[142px] mt-[1200px] md:mt-[850px] py-6">
   <ServicesView services={services} setSelected={setSelected}/>
   <ServiceInfoCard selected={selected}/>
   </div>
   </Container>
   
   
   </>
  )
}

export default Services