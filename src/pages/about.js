import * as React from "react"
import IntroCard from "../components/IntroCard";

import Layout from "../components/Layout";
import styled from "styled-components";
import Line from "../components/Line";
import TitleCard from "../components/TitleCard";
import Head from "../shared/Head";

const StyledParagraph = styled.p`
font-size:1.5rem;
margin-bottom:1rem;
margin-top:1rem;
line-height:1.5 ;
@media (min-width:400px){
   
     
}


@media (min-width:600px){
font-size:1.8rem;
}
`;

const HeadingTitle = styled.h2`
text-align:left;
margin-bottom:.5rem;
align-self:flex-start;
margin-top:4rem;
font-size:2.2rem;
font-weight:400;

@media (min-width:400px){
   
     
}


@media (min-width:600px){
     font-size:3rem;
}
`

const SubHeadingLine = styled(Line)`
margin-top:.5rem;
width:100%;
`

const SubHeadingText = styled.h5`
display:block;
font-size:1.8rem;
margin-bottom:.5rem;
text-align:left;
font-weight:400;

@media (min-width:400px){
   
     
}


@media (min-width:600px){
 font-size:2rem;
}
`

const ParagraphLink = styled.a`
text-decoration: none;
position: relative;
border-bottom:solid 1px white;
transition:.2s ease-in;

&::before {
  content: '';
  /* background-color: #ff49498e; */
  background:linear-gradient(70deg, rgba(197,15,15,.5) 33%, rgba(23,0,255,.5) 60%);
  position: absolute;
  left: 0;
  bottom: 4px;
  width: 100%;
  height: .5px;
  z-index: -1;
  transition: all .3s ease-in-out;
}

&:hover::before {
  bottom: 0;
  height: 100%;
}

&:hover{
padding-bottom:.2rem;
transition:.2s ease-in;
}
`

const about = () => {
     return (
       <Layout>
         <Head title="About"></Head>
         <TitleCard>About</TitleCard>
         <IntroCard>
           <HeadingTitle>
             Get To Know Me
             <SubHeadingLine></SubHeadingLine>
           </HeadingTitle>
           <StyledParagraph>
             <SubHeadingText>
               I am a front end web developer & UX designer from Canada🇨🇦.
             </SubHeadingText>
             I am passionate about creating modern designs, to fit your
             business's requirements. Creating optimal user experiences requires
             a lot of communication, and weighing the pros and cons of specific
             approaches. Whether using tools like Shopify or Wordpress, or
             building a solution from scratch. I can comminicate with non
             technical and technical people about the best appraoches for their
             particular context. I help brands stand out online with performant,
             intuitive designs. Sharing your brand with the online world. I am
             interested in creating highly engaging digital experiences that
             allow users to utilize the web to it's full capabillity. If you
             would like to know more, you can check out my{" "}
             <ParagraphLink href="https://mobile.twitter.com/JayFerg_00">
               twitter
             </ParagraphLink>{" "}
             or send me an{" "}
             <ParagraphLink href="mailto: jayfergweb@gmail.com">
               email
             </ParagraphLink>
             , even just to chat.
           </StyledParagraph>
           <HeadingTitle>
             Skill Set & Experience
             <SubHeadingLine></SubHeadingLine>
           </HeadingTitle>
           <StyledParagraph>
             <SubHeadingText>
               Ultimately the web is about communicating ideas.
             </SubHeadingText>
             With knowledge of design and development tools I am able to
             communicate effectively with designers, developers, and clients.
             With my experience using the Adobe CC suite, as using web
             development frameworks I can work across teams of technical and non
             technial stakeholders Some of the tools I have used, Jekyll, 11ty,
             Gatsby, Next, Wordpress, Sanity.io and Shopify. Using CSS BEM
             methodology I create layouts with Grid and flexbox to ensure they
             are designed to spec on all devices and modern browsers. I have
             experience using SCSS, styled components, Bootstrap and Tailwind.
             To see more of my other projects or just to learn more about me,
             check out my social links below.
           </StyledParagraph>
         </IntroCard>
       </Layout>
     );
}

export default about;