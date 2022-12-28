import React from 'react'
import styled from 'styled-components'
import Socials from "../components/Socials";

const StyledFooter = styled.div`
width:100%;
background: var(--black);
color:var(--grey);
display: flex;
flex-flow:column;
align-items: center;
padding: 1rem 0 1rem 0;
height:auto;
justify-content: center;
grid-row: 4;
`

export default function Footer() {
     return (

          <StyledFooter>
               <Socials></Socials>
               <p>2022</p> 
          </StyledFooter>
     )
}
