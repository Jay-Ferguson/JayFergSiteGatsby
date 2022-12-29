import {createGlobalStyle} from 'styled-components';

//import font from '../assets/fonts/frenchfries.woff';


const Typography = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');


html{
font-family: 'Roboto', sans-serif;

/* font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
color: var(--white);
font-size:62.5%;
}

p, li {
     letter-spacing: .2px;
     font-size: 1.5rem;
     font-weight: 150;

     @media screen and (min-width: 600px) {
          font-size:2rem;
  }

}


h1,h2,h3,h4,h5,h6 {

     font-weight: 180;
     margin:0;
     text-align:center;
     }

     h2{
          font-size:2.2rem;
          letter-spacing: .3rem;
     }

     h3 {
          font-size:1.4rem;
     }

a{
     text-decoration: none;
}

`;

export default Typography;

