import Line from "./Line";

import React from 'react'
import styled from 'styled-components'


const StyledTitle = styled.h2`
font-size:2rem;
margin-bottom:1rem;
font-size:2rem;
font-weight:400;
text-transform:uppercase ;
`

const TitleCards = styled.div`
align-self: center;
display:flex;
flex-flow:column;
align-items: center;
width:10rem;
margin-bottom:2rem;
padding:2rem;
background: rgba( 77, 77, 77, 0.90 );
box-shadow: 0 8px 32px 0 rgba( 11, 28, 15, 0.37 );
backdrop-filter: blur( 10.0px );
-webkit-backdrop-filter: blur( 10.0px );
border-radius: 5px;
border: 1px solid rgba( 200, 200, 255, .1 );

@media (min-width:400px){
     width:30rem;
     
}


@media (min-width:600px){
     width:45rem;
     
}
`

const TitleCard = ({children}) => {
     return (
          <TitleCards>
               <StyledTitle>
               {children}
               </StyledTitle>
               <Line/>
          </TitleCards>
     )
}

export default TitleCard;
