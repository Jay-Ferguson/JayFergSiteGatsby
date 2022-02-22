import React from 'react';
import { motion }  from 'framer-motion';

const hello = "Hello";

 const sentence = {
      hidden: {opacity:1},
      visible:{
           opacity: 1,
           transition:{
                delay:0.5,
                staggerChildren:0.1,
           },
      },
 }

 const letter = {
      hidden:{opacity:0, y: 50},
      visible:{
           opacity: 1,
           y:0,
      },
 }
 
export default function IntroAnimation() {
     return (
          <motion.h2
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
          </motion.h2>
     )
}

