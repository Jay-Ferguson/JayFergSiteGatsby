import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
width:100%;
background: var(--black);
color:var(--grey);
display: flex;
align-items: center;
padding: 1rem 0 1rem 0;
height:4rem;
justify-content: center;
grid-row: 4;
`

export default function Footer() {
     return (

          <StyledFooter>
               <p>Jay Ferguson - 2021™</p> 
          </StyledFooter>
     )
}
