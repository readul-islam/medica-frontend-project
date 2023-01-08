import { Box, Container, Divider } from "@mui/material";
import React from "react";

const ServicesView = ({ setSelected, services }) => {
  return (
    <>
      <div className="text-center flex flex-col justify-center items-center dark:text-[#ADB6BE] text-[rgb(74,82,93)] mb-12 uppercase">
        <small className="font-light text-[10px]">MEDICAL PRO SERVICES</small>
        <h3 className="text-3xl font-bold">GET WELL SOON </h3>
        <Divider className="w-28 bg-gray-400 my-2" />
      </div>
      <div className="   grid cursor-pointer overflow-visible grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 justify-items-center w-full ">
        {services.map((service) => (
          <div
            onClick={() => setSelected(service)}
            className="border dark:border-cyan-700/80 px-4 py-4 text-center  xl:w-40 xl:h-22 overflow-visible relative flex flex-col justify-center items-center "
          >
            <p className="absolute  top-[-25px] z-50 bg-slate-100 dark:bg-indigo-900 p-1 text-gray-500 ">
              {service.icon}
            </p>
            <h4 className=" md:text-xs text-[10px]  pt-4 font-bold dark:text-[#b9bdc7]   text-gray-600">
              {service.title}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesView;
