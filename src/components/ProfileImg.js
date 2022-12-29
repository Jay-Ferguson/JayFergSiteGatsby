import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components';

const StyledImageContainer = styled.div`
width:60%;
display:flex;
align-items:center;
justify-content:center ;
`

export function ProfileImg(){
     return (
<StyledImageContainer>          
          <StaticImage src="../images/squareSelfie.jpg" alt="profile-photo" placeholder="blurred" />
</StyledImageContainer>

     )
     
}
