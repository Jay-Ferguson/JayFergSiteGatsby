
import styled from 'styled-components';


export const ButtonMain = styled.a`
     margin-top:2rem;
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 10px;
     background-color: #f7f7f7f9;
     width: 10em;
     height: 5em;
     color: #272727;
     text-transform: uppercase;
     font-size: 1.1rem;
     box-shadow: 4px 15px 15px -2px rgba(0, 0, 0, 0.35);
     border: 0;
     margin: 0 auto;
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
       transform: scaleY(3px); 
       `