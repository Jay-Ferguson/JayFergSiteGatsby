import * as React from "react"
import IntroCard from "../components/IntroCard";
import Socials from "../components/Socials";
import Layout from "../components/Layout";
import styled from "styled-components";
import Line from "../components/Line";

const StyledParagraph = styled.p`
font-size:1.5rem;
margin-bottom:1rem;
margin-top:1rem;
line-height:1.5 ;
`;

const HeadingTitle = styled.h2`
text-align:center;
margin-bottom:.5rem;
font-size:2rem;
font-weight:400;
text-transform:uppercase ;
`

const about = () => {
     return (
          <Layout>
          <IntroCard>
               <HeadingTitle>About</HeadingTitle>
               <Line></Line>
               <StyledParagraph>  
                    I am a front end web developer and UX designer from Ottawa Canada. 
                    I am passionate about creating modern designs, to fit your business's requirements. 
                    Whether using tools like Shopify or Wordpress, or building site from scratch. 
                    I help brands stand out online with performant, intuitive designs. Sharing your brand with the online world.
               </StyledParagraph>
               <HeadingTitle>SkillSet</HeadingTitle>
               <Line></Line>
               <StyledParagraph>
                    With knowledge of design and development tools I am able to communicate effectively with both graphic designers 
                    as well as web developers as a team, I have experience using the Adobe CC suite and using web development frameworks.
                    Some of the tools I have used, Jekyll, 11ty, Gatsby, Next, Wordpress, Sanity.io and Shopify.

                    Using CSS BEM methodology I create layouts with Grid and flexbox to ensure they are designed to spec
                    on all devices and modern browsers. I have experience using SCSS, styled components, Bootstrap and Tailwind.
                    To see more of my other projects or just to learn more about me, 
                    check out my social links below or send me an email. 
               </StyledParagraph>

                    <Socials></Socials>
          </IntroCard>
          
          </Layout>
          
     )
}

export default about;