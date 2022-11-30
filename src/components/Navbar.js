// Navbar.js

import React, { useState } from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import styled from "styled-components";

const Navigation = styled.nav`
  max-height: 8rem;
  z-index: 5;
`;
const Toggle = styled.div`
  display: absolute;
  z-index: 10;
  top: 50;
  height: 100%;
  background-color: var(--black);
  cursor: pointer;
  padding: 2.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;
const Navbox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  max-width: 100%;
  min-height: 100vh;
  justify-content: flex-start;
  padding-left: 4rem;
  padding-top: 10vh;
  background: linear-gradient(
    60deg,
    rgba(69, 69, 69, 1) 5%,
    rgba(221, 221, 221, 0.875) 100%
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.2s ease-in-out;
  /* left: ${(props) => (props.open ? "-100%" : "0")};
  opacity: ${(props) => (props.open ? "0" : "100")}; */
`;
const NavItem = styled(motion(Link))`
  text-decoration: none;
  color: var(--black);
  white-space: nowrap;
  letter-spacing: 0.5rem;
  padding: 20px 0;
  font-size: 5.5rem;
  font-weight:300;
  z-index: 6;
  margin: 0;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: var(--white);
    height: 1px;
    transition: all 0.2s cubic-bezier(0.23, 1, 0.320, 1);
  }

  :hover {
    background: -webkit-linear-gradient(-80deg, red, blue);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: translateX(5rem);
    transition: 0.1s linear;
    ::after {
      width: 20%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 4.5rem;
    z-index: 6;
  }
`;
const Hamburger = styled.div`
  background-color: var(--grey);
  border-radius: 40px;
  width: 30px;
  height: 2px;
  transition: all 0.2s ease-in;
  align-self: center;
  position: relative;
  z-index: 5;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    border-radius: 40px;
    width: 30px;
    height: 2px;
    background-color: var(--grey);
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

const container = {
  hidden: { opacity: 0, x: -1000 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.20,
      staggerChildren: 0.10,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 15 },
};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navigation>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox initial={{ opacity: 0, x: 200 }} animate={navbarOpen ? "show" : "hidden"} variants={container}>
          <NavItem variants={item} to="/">
            Home
          </NavItem>
          <NavItem variants={item} to="/about">
            About
          </NavItem>
          <NavItem variants={item} to="/projects">
            Projects
          </NavItem>
          <NavItem variants={item} to="/contact">
            Contact
          </NavItem>
        </Navbox>
      ) : (
        <Navbox
          initial={{ opacity: 0, x: 200 }}
          animate={navbarOpen ? "show" : "hidden"}
          variants={container}
          open
        >
          <NavItem variants={item} to="/">
            Home
          </NavItem>
          <NavItem variants={item} to="/about">
            About
          </NavItem>
          <NavItem variants={item} to="/projects">
            Projects
          </NavItem>
          <NavItem variants={item} to="/contact">
            Contact
          </NavItem>
        </Navbox>
      )}
    </Navigation>
  );
};

export default Navbar;
