import React, { useState } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import MouseContextProvider from "../context/mouse-context";
import Particles from "../components/Particles";
import styled from "styled-components";
import { motion } from "framer-motion";

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
  clip-path: polygon(0 3%, 100% 0, 100% 100%, 0% 100%);
  margin-top:10rem;
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
      <GlobalStyles />
      <Typography />
      <MouseContextProvider>
        <Heading>
          <Navbar />
          <Logo />
          <Particles />
        </Heading>
        <Content
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{
            type: "tween",
            duration: 0.15,
          }}
        >
          {children}
        </Content>
        <Footer />
      </MouseContextProvider>
    </StyledLayout>
  );
}
