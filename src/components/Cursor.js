import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const CustomCursor = styled.div.attrs({
  classname: ''
})`
  width: 20px;
  height: 20px;
  border: 1px solid #121212;
  border-radius: 100%;
  position: fixed;
  z-index:200;
  transform: translate(-50%, -50%);
  transition: all 150ms ease;
  transition-property:opacity;
  
  @media(max-width:1000px){
    display:none;
  }

`;


const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mouseenter", mEnter);
      document.addEventListener("mouseleave", mLeave);
      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
      document.removeEventListener("mouseenter", mEnter);
      document.removeEventListener("mouseleave", mLeave);
      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
    };

    const mDown = () => {
      setClick(true);
    }

    const mUp = () => {
      setClick(false);
    }

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };

    const mLeave = () => {
      setHidden(true);
    };

    const mEnter = () => {
      setHidden(false);
    };

    const addLinkEvents = () => {
      document.querySelectorAll('a').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true));
        el.addEventListener('mouseout', () => setLinkHover(false));
      });
      document.querySelectorAll('button').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true));
        el.addEventListener('mouseout', () => setLinkHover(false));
      });
    };

    addEventListeners();
    addLinkEvents();
    return () => removeEventListeners();
  }, []);


  return (
  <CustomCursor
  className = {
    'cursor' + (hidden ? 'c--hidden' : ' ') +
    (click ? 'c--click' : ' ')
  }
  style={{
    left: `${position.x}px`,
    top: `${position.y}px`,
  }}

  
  />
);
};

export default Cursor;
