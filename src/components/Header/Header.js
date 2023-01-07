import React, { useEffect, useState } from "react";
import HeaderView from "./HeaderView";
import { animated, config, useTransition } from "react-spring";
import HeaderCard from "./HeaderCard";
export const slides = [
  {
    id: 0,
    url: "http://medicalpro.themedesigner.in/wp-content/uploads/revslider/slider1/slider3-img.jpg",
    content: "ONE-STOP SOLUTION MEDICAL SERVICE",
  },
  {
    id: 2,
    url: "http://medicalpro.themedesigner.in/wp-content/uploads/revslider/slider1/slider1-img.jpg",
    content: "MEDICAL SERVICE YOU CAN TRUST ",
  },
  {
    id: 1,
    url: "http://medicalpro.themedesigner.in/wp-content/uploads/revslider/slider1/slider2-img.jpg",
    content: "MEDICAL SERVICE YOU CAN TRUST & RELAY ON ",
  },
];
const data = [
  {
    id: 1,
    heading: "QUICK HELP",
    title: "EMERGENCY CASES",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ea ab quibusdam animi repudiandae ipsa nam",
    action: "Contact us now",
  },
  {
    id: 2,
    heading: "in your country",
    title: "263 branches",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ea ab quibusdam animi repudiandae ipsa nam",
    action: "nearest location",
  },
  {
    id: 3,
    heading: "smooth and easy",
    title: "online bill payments",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ea ab quibusdam animi repudiandae ipsa nam",
    action: "pay your bill now",
  },
];

const Header = () => {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0.5, scale: 0.4, duration:1 },
    config: config.molasses,
  });
  useEffect(
    () =>
      void setInterval(
        () => setIndex((state) => (state + 1) % slides.length),
        10000
      ),
    [setIndex]
  );
  return (
    <>
     
    
      <HeaderView transitions={transitions} index={index} setIndex={setIndex} />


<div className="absolute top-[450px] md:top-[600px] flex flex-col md:flex-row gap-y-4 md:gap-8 justify-center w-full z-10">
  {data.map(info =>  <HeaderCard info={info} />)}
  </div>

      </>
  
    
  );
};

export default Header;
