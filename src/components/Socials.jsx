import React from 'react';
import styled from 'styled-components'
import behanceLogo from '../images/icon-svg/iconmonstr-behance-1.svg';
import codeLogo from '../images/icon-svg/code.svg';
import twitterLogo from '../images/icon-svg/iconmonstr-twitter.svg';
import GithubLogo from '../images/icon-svg/iconmonstr-github-1.svg';

const SocialContainer = styled.div `
margin-top:5rem;
margin-bottom: 5rem;
align-self:center;
background:var(--grey);
width:80%;
padding:20px;
border-radius:45px;
box-shadow: 4px 25px 25px -2px rgba(0,0,0,35%);
display:flex;
justify-content: space-evenly;
align-items:center;
`

const SocialIcon = styled.img`
height:25px;
width:25px;
background-color: transparent;
transition: all.5s;
`

export default function Socials() {
     return (
         <SocialContainer>
                         
                              
                              <a href="https://www.behance.net/JayF" rel="noreferrer" target="_blank" className="social-link">
                              <SocialIcon src={behanceLogo} alt="behance" className="social-icon"/>
                              </a>
  
                              <a href="https://twitter.com/JayFerg39898519" rel="noreferrer" target="_blank" className="social-link">
                              <SocialIcon src={twitterLogo} alt="twitter" className="social-icon"/>
                              </a>

                              <a href="https://codepen.io/ferg04084" rel="noreferrer" target="_blank" className="social-link">
                              <SocialIcon src={codeLogo} alt="codepen" className="social-icon"/>
                              </a>
                              
                              <a href="https://github.com/Jay-Ferguson" rel="noreferrer" target="_blank" className="social-link">
                              <SocialIcon src={GithubLogo} alt="github" className="social-icon"/>
                              </a>
          </SocialContainer>
     )
}
