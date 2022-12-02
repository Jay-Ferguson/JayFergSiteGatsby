import React from 'react';
import { motion }  from 'framer-motion';
import styled from 'styled-components';

const HelloHeader = styled(motion.h2)`
font-size:4rem;
letter-spacing:.5rem;
text-transform:uppercase ;
`


const hello = "Hello";

 const sentence = {
      hidden: {opacity:1},
      visible:{
           opacity: 1,
           transition:{
                delay:1,
                staggerChildren:.22,
           },
      },
 }

 const letter = {
      hidden:{opacity:0, y: 50 },
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

