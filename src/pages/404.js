import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../shared/Head"
import computer404 from '../images/giphy.gif'
import {LinkButton} from "../pages/index";
import TitleCard from "../components/TitleCard";
import IntroCard from "../components/IntroCard";
import StyledTitleCard from "../components/TitleCard";
import styled from "styled-components";


// styles

const StyledGif = styled.img`
margin:1rem;
width:50%;
height:auto;

`

const LinkButton2 = styled(Link)`
  margin-top: 2.5rem;
  background-color: var(--grey);
  border-radius: 5px;
  width: 60%;
  font-size: 1.5rem;
  height: 4rem;
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  &:hover {
    transform: translateY(-3px);
    transition: 0.3s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    background-color: white;
  }
  &:active {
    transform: translateY(-1px);
    transition: 0.3s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  }
  & ::after {
    transform: scaleY(3px);
  }
`;

 
// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Head title="About"></Head>
      <TitleCard>404 Page not found 😔</TitleCard>
      <IntroCard>
        <h1>Sorry this page does not exist</h1>

          <StyledGif
            src={computer404}
            alt="oops-404"
          />

        <LinkButton2 to="/">Home Page</LinkButton2>
      </IntroCard>
    </Layout>
  );
}

export default NotFoundPage
