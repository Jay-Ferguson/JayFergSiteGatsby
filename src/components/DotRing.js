import React, { useState, useEffect, useContext } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { MouseContext } from "../context/mouse-context";
import styled from "styled-components";
import { motion, useMotionValue, useSpring } from "framer-motion";

const StyledRing = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;
  border: 1px solid rgba(31, 30, 30, 0.808);
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition-duration: 25ms;
  transition-timing-function: ease-out;
  will-change: width, height, transform, border;
  z-index: 999;
  pointer-events: none;
  

  &:hover {
    width: 25px;
    height: 25px;
    border-width: 2px;
    mix-blend-mode: difference;
    border-color: var(--red);
    
  }
  @media(max-width:1000px){
    display:none;
  }
`;

const Dot = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 100%;
  transform: translate(-25%, -25%);
  z-index: 999;
  pointer-events: none;
  cursor:none;
  &:hover {
  display:none;
  }
`;

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  //animations
  const springConfig = { damping: 10, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <>
      <StyledRing
        style={{ translateX: cursorXSpring, translateY: cursorYSpring }}
      ></StyledRing>
      <Dot
        style={{ translateX: cursorXSpring, translateY: cursorYSpring }}
      ></Dot>
    </>
  );
}

const DotRing = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      <StyledRing
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring" + cursorType}
      ></StyledRing>
      <Dot
        className={"dot" + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></Dot>
    </>
  );
};

