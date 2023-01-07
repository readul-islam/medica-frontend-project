import React, { useEffect, useState } from 'react'
import HeaderView from './HeaderView'
import { animated, config, useTransition } from 'react-spring'
 export const slides = [
  { id: 0, url: "http://medicalpro.themedesigner.in/wp-content/uploads/revslider/slider1/slider3-img.jpg", content: 'ONE-STOP SOLUTION MEDICAL SERVICE' },
  { id: 2, url: "http://medicalpro.themedesigner.in/wp-content/uploads/revslider/slider1/slider1-img.jpg", content: 'MEDICAL SERVICE YOU CAN TRUST ' },
  { id: 1, url: "http://medicalpro.themedesigner.in/wp-content/uploads/revslider/slider1/slider2-img.jpg", content: 'MEDICAL SERVICE YOU CAN TRUST & RELAY ON ' },
  
 
]
const Header = () => {
  const [index, setIndex] = useState(0)
  const transitions = useTransition(index, {
    from: { opacity: 0 ,},
    enter: { opacity: 1, scale: 1  },
    leave: { opacity: 0.5 , scale: 0.5},
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => setIndex(state => (state + 1) % slides.length), 10000), [setIndex])
  return (
   <HeaderView transitions={transitions} index={index} setIndex={setIndex}/>
  )
}

export default Header