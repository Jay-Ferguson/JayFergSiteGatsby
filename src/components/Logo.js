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
  max-width: 8rem;
  max-height: 8rem;
  margin: 0 0 2rem 0;
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
