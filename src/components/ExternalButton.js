import React from 'react'
import styled from 'styled-components'

const ExternalButtons = styled.button`
     margin-top:4rem;
     display: flex;
     justify-content: center;
     align-items: center;
     align-self:center;
     border-radius: 10px;
     background-color: #f7f7f7f9;
     width: 20em;
     height: 5em;
     color: #272727;
     text-transform: uppercase;
     font-size: 1.1rem;
     box-shadow: 4px 15px 15px -2px rgba(0, 0, 0, 0.35);
     border: 0;
     transition: .5s; }
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
       transform: scaleY(3px); }
     `

const ExternalButton = ({children}) => {
     return (
          <ExternalButtons role="button" href={children} type="submit">
               {children}
          </ExternalButtons>
     )
}
export default ExternalButton;