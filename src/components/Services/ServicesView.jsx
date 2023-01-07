import { Box, Container } from "@mui/material";
import React from "react";
import { services } from "../../utils/mockData";

const ServicesView = () => {
  return (
    <Container maxWidth="xl">
      <div className="  grid px-[142px] pt-[850px] grid-cols-6 gap- justify-items-center w-full py-10">
        {services.map((service) => (
          <div className="border w-40 h-20">

            {service.icon}
          </div>
        ))}
      
      </div>
    </Container>
  );
};

export default ServicesView;
