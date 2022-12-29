import React from 'react';
import { motion }  from 'framer-motion';
import styled from 'styled-components';
import { keyframes } from 'styled-components';


const blur = keyframes`
from {
     -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
}

to{
    -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -o-filter: blur(0px);
    -ms-filter: blur(0px); 
}

`;


const HelloHeader = styled(motion.h2)`
  font-size: 6rem;
  letter-spacing: 0.5rem;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  animation:${blur} 1.4s ease;
`;





const hello = "Hello";

 const sentence = {
      hidden: {opacity:1},
      visible:{
           opacity: 1,
           transition:{
                delay:1,
                staggerChildren:.20,
           },
      },
 }

 const letter = {
      hidden:{opacity:0, y: 50, },
      visible:{
           opacity: 1,
           y:0,

      },
 }
 
export default function IntroAnimation() {
     return (
          <HelloHeader
          className="introMessage"
          variants ={sentence}
          initial="hidden"
          animate="visible"
          >

{hello.split("").map((char, index) => {
      return (
           <motion.span key={char + "_" + index} variants={letter}>
                {char}
           </motion.span>
      )
 })}
          </HelloHeader>
     )
}

