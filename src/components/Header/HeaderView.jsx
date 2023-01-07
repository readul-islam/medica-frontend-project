import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { animated, config, useTransition } from "react-spring";
import PrimaryButton from "../../shared/PrimaryButton";
import { slides } from "./Header";
import "./style.css";

const HeaderView = ({ index, setIndex, transitions }) => {
  return (
    <div>
      {transitions((props, item) => (
        <>
          <animated.div
            className="bg"
            style={{ ...props, backgroundImage: `url(${slides[item]?.url})` }}
          >
            <Typography
              sx={{
                color: "#404D5F",
                fontSize: { xs: 32, md: 48 },
                position: "relative",
                left: -306,
                top: -100,
                fontWeight: 900,
                width: 550,
                // textAlign: "justify",
              }}
            >
              {slides[item].content}{" "}


              <Typography sx={{marginTop:1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ea ab quibusdam animi repudiandae ipsa nam amet neque quod similique?</Typography>
              <PrimaryButton>View Service</PrimaryButton>
            </Typography>

         
           
          </animated.div>
        </>
      ))}
    </div>
  );
};

export default HeaderView;
