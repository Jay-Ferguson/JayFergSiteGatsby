import * as React from "react";
import Head from "../shared/Head";
import styled from "styled-components";
import { Script } from "gatsby"
import { keyframes } from "styled-components";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { ProfileImg } from "../components/ProfileImg";
import IntroCard from "../components/IntroCard";
import IntroAnimation from "../components/IntroAnimation";
import "normalize.css";


//query
const lineStroke = keyframes`
from{
  width:0%;

}

to{
  width:50%;
}
`

const Line = styled.div`
  height: 2px;
  width: 50%;
  background-image: linear-gradient(-90deg, red, blue);
  border-radius: 30px;
  margin-bottom: 1rem;
  animation: ${lineStroke} .7s ease-in;

`;


const LinkButton = styled(Link)`
  margin-top: 2.5rem;
  background-color: var(--grey);
  border-radius: 5px;
  width: 60%;
  font-size:1.5rem;
  height: 4rem;
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  transition:.3s;
  &:hover {
       transform: translateY(-3px);
       transition: .3s;
       transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
       background-color: white; }
     &:active {
       transform: translateY(-1px);
       transition: .3s;
       transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
     & ::after {
       transform: scaleY(3px); 
     }
`;

const IntroText = styled.h3`
  margin-bottom: 2rem;
  font-size:1.5rem;

  @media (min-width:600px){
    font-size:2rem;
  }
  
`;

const SectionContainer = styled.section `
display:flex;
align-items:center;
justify-content:center;
`

const HomePage = ({ data }) => {
  const { description } = data.site.siteMetadata;
  return (
    <Layout>
      <Head />
      <SectionContainer>
        <IntroCard>
          {/* <h1>{title}</h1> */}
          <IntroAnimation></IntroAnimation>
          <Line></Line>
          <IntroText>{description}</IntroText>
          <ProfileImg></ProfileImg>
          <LinkButton
            to="/projects"
          >
            See My Projects
          </LinkButton>
        </IntroCard>
      </SectionContainer>
    <Script src="../components/Script.js"></Script>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        img
      }
    }
  }
`;
export default HomePage;
