import React from 'react'
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';


const PButton = styled(Link)`
  margin-top: 2.5rem;
  background-color: var(--grey);
  border-radius: 5px;
  width: 60%;
  font-size:1.3rem;
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

const Container = styled.section `
margin:0 auto;
width:100%;
height:12rem;
background:(--black);
clip-path: polygon(0 4%, 100% 0, 100% 100%, 0% 100%);
box-shadow: 0 8px 32px 0 rgba( 11, 28, 15, 0.37 );
backdrop-filter: blur( 10.0px );
-webkit-backdrop-filter: blur( 10.0px );
`

const Projects = styled.div `
display:flex;
flex-direction:column;
align-items: center;
justify-items: center;
gap:1rem;
margin-top:2rem;
@media screen and (min-width: 800px) {
  flex-direction: row;
  }
`
const ProjectItems = styled.div`
padding:1rem;
border-radius: 10px;
`

export default function ProjectMini() {
     return (
          <Container>
          <Projects>
          <ProjectItems>
               <StaticImage src="../images/featured/calc-banner.png" alt="project-photo-one" placeholder="blurred" />
               <PButton to="/projects"/>
          </ProjectItems>
          <ProjectItems>
               <StaticImage src="../images/thumb/js-text-to-speach.png" alt="project-photo-two" placeholder="blurred" />
               <PButton to="/projects"/>
               </ProjectItems>
          <ProjectItems>
               <StaticImage src="../images/thumb/js-to-do-list.png" alt="project-photo-three" placeholder="blurred" />
               <PButton to="/projects"/>
               </ProjectItems>
          </Projects>
          </Container>
     )
}
