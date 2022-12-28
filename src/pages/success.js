import React from "react";
import { Link } from "gatsby";
import { useState, useRef } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import IntroCard from "../components/IntroCard";
import ExternalButton from "../components/ExternalButton";



const StyledContactP = styled.p`
  font-size: 1.5rem;

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

const styledLink = styled(Link)`
color:black;
`

export default function success() {

  return (
    <Layout>
      <IntroCard>
        <StyledContactP>
          Thank you for reaching out! You will hear from me soon.
        </StyledContactP>

        <ExternalButton type="submit" href="/">
          <Link to="/">take me home</Link>
        </ExternalButton>
      </IntroCard>
    </Layout>
  );
}
