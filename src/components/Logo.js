import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "gatsby";
import logo from "/src/images/icon-svg/j-logo.svg";

const LogoStyle = styled(motion.img)`
  position: absolute;
  z-index: 1;
  top: 10rem;
  left: 20px;
  max-width: 10rem;
  max-height: 10rem;
  margin: 0 0 2rem 0;

  @media (min-width:400px){
   
     
}


@media (min-width:600px){
  max-width: 12rem;
  max-height: 12rem;
}

`;

export default function Logo() {
  return (
    <Link to="/">
      <LogoStyle
        initial={{ opacity: -1, x: "-15px" }}
        animate={{ opacity: 1, x: "0px" }}
        transition={{ duration: 1, type: "tween" }}
        src={logo}
        alt="logo"
        aria-label="J-logo"
      />
    </Link>
  );
}
