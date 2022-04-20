import React from 'react'
import styled from 'styled-components'


const IntroCards = styled.div`
align-self: center;
display:flex;
flex-flow:column;
align-items: center;
width:24rem;
margin-bottom:5rem;
padding:3rem;
background: rgba( 77, 77, 77, 0.80 );
box-shadow: 0 8px 32px 0 rgba( 11, 28, 15, 0.37 );
backdrop-filter: blur( 10.0px );
-webkit-backdrop-filter: blur( 10.0px );
border-radius: 5px;
border: 1px solid rgba( 200, 200, 255, .1 );

@media (min-width:800px){
     width:35rem;
     
}
`

const IntroCard = ({children}) => {
     return (
          <IntroCards>
               {children}
          </IntroCards>
     )
}

export default IntroCard;

