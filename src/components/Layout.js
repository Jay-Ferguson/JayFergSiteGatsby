import React, { useState } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Head from "../shared/Head";
import MouseContextProvider from "../context/mouse-context";
import styled from "styled-components";
import { motion } from "framer-motion";
import ParticlesBg from "./ParticlesBg";

const StyledLayout = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100%;
  width: 100vw;
  overflow-x:hidden;
`;
const Heading = styled.header`
  min-height: 10rem;
`;

const Content = styled(motion.div)`
  clip-path: polygon(0 23px, 100% 0, 100% 100%, 0% 100%);
  margin-top:8rem;
  padding: 8rem 1rem 0rem 1rem;
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  align-content: space-around;
  justify-items: center;
  background: var(--gradientgrey);
`;

//defining navbar animations


export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <StyledLayout>
      {/* <Head /> */}
      <GlobalStyles />
      <Typography />
      <MouseContextProvider>
        <Heading>
          <Navbar />
          <Logo />
          <ParticlesBg />
        </Heading>
        <Content
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{
            type: "tween",
            duration: 0.12,
          }}
        >
          {children}
        </Content>
        <Footer />
      </MouseContextProvider>
    </StyledLayout>
  );
}
