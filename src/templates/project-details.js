import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import { ButtonMain } from "../components/Button";
import { device } from '../styles/mediaQueries'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import IntroCard from "../components/IntroCard";

const LineTwo = styled.div`
height: 2px;
width: 90%;
background-image: linear-gradient(-90deg, red, blue);
border-radius: 30px;
margin: 1rem;
`
const Title = styled.h2`
font-size: 2.5rem;
text-align-last: center;
 
@media ${device.lg} {
  font-size:3.5rem;
}

`
const Stack = styled.h3`
font-size: 1.5rem;
`
const PDetails = styled.div`
  text-align: center;
  padding: 0 2rem 0 2rem;
  max-width:55rem;
  align-self:center ;
  justify-self:center;
`

const ButtonsContainer = styled.div`
display:flex;
gap:3rem;
justify-content:space-around;
align-items:center;
padding:2rem 0 6rem 0;
margin:0 auto;

`

export default function ProjectDetails({ data }) {
  const { html } = data.mdx;
  const { title, stack, featuredImg, link, github } = data.mdx.frontmatter;
  const image = getImage(featuredImg.childImageSharp);
  console.log(github);
  return (
    <Layout>
     <IntroCard>
     <Title>{title}</Title>
     <LineTwo />
      <Stack>{stack}</Stack>
     </IntroCard>

      <GatsbyImage image={image} alt="project-img" objectFit="contain">

      </GatsbyImage>

      <PDetails dangerouslySetInnerHTML={{ __html: html }} />
      <ButtonsContainer>
        <ButtonMain href={github} target="blank" role="button">Github</ButtonMain>
        <ButtonMain href={link} target="blank" role="button">Live</ButtonMain>
      </ButtonsContainer>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsDetails($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        stack
        title
        link
        github
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              width: 400
              placeholder: BLURRED
              formats: WEBP
              transformOptions: { fit: CONTAIN, cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`;
