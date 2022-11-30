import {createGlobalStyle} from 'styled-components';


const GlobalStyles = createGlobalStyle `
:root {
     --red:#ff4949;
     --black:#2e2e2e;
     --yellow:#ffc600;
     --white:#fff;
     --grey:#efefef;
     --gradientgrey:linear-gradient(20deg, rgba(64,64,64, .8) 20%, rgba(221,221,221, .9) 100%);

     
}
*{

}

html {
   font-weight:normal;
   min-height:100vh;
   font-size:62.5%;
}
body{
     height:100vh;
}

h1{
     font-family: 'Montserrat';
     text-transform: uppercase;
     letter-spacing: 0.2rem;
}
a{
     color:var(--white);
}

button {
     background-color:var(--grey);
     width:5rem;
     height:2rem;
     border-radius:30px;
     display:flex;
     align-items: center;
     border: none;
     justify-content: center;
}

.introMessage{
     font-size:3rem;
}
`

export default GlobalStyles;