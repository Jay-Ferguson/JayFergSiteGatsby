import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import styled from "styled-components";
import Img from "gatsby-image";

const Grid = styled.div`

  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  padding-bottom:4rem;

  @media screen and (min-width: 700px) {
    grid-template-columns: 50% 50%;
    grid-column-gap: 1rem;
  }
`;

const GridLink = styled(Link)`

`

const GridCard = styled.div`
  width: 100%;
  height: 25rem;
  padding: 2rem 0 2rem 0;
  background: rgba(64, 64, 64, 0.5);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(17px);
  -webkit-backdrop-filter: blur(17px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-flow: column;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  transition: 0.2s;

  &:hover {
    transform: scale(1.02);
    transition: 0.2s;
    background: rgba(255, 255, 255, 0.45);
  }
`;
const StyledH3 = styled.h3`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 100;
`;

const SubTitle = styled.h3`
margin-bottom:4rem;
`

const Stack = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;
export default function Projects({ data }) {
  const projects = data.projects.nodes;
  return (
    <Layout>
      <h2>Portfolio</h2>
      <SubTitle>Projects I have created</SubTitle>
      <Grid>
        {projects.map((project) => (
          <GridLink to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <GridCard
              data-sal="fade"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              <Img
                fixed={project.frontmatter.thumb.childImageSharp.fixed}
                alt="project-banner-image"
                objectFit="contain"
              />
              <StyledH3>{project.frontmatter.title}</StyledH3>
              <Stack>{project.frontmatter.stack}</Stack>
            </GridCard>
          </GridLink>
        ))}
      </Grid>
    </Layout>
  );
}
// export page query

export const query = graphql`
  query ProjectPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fixed(width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
