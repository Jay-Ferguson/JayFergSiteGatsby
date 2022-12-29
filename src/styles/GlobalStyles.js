import {createGlobalStyle} from 'styled-components';


const GlobalStyles = createGlobalStyle`
:root {
     --red:#ff4949;
     --black:#2e2e2e;
     --yellow:#ffc600;
     --white:#fff;
     --grey:#efefef;
     --gradientgrey:linear-gradient(20deg, rgba(64,64,64, .8) 20%, rgba(221,221,221, .9) 100%);

     
}

/* @font-face {
  font-family: 'Montserrat-Light';
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
  font-named-instance: 'Regular';
  src: url(/static/admin/assets/fonts/Montserrat-Light.ttf) format("ttf");
}

@font-face {
  font-family: 'RenoMono';
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
  font-named-instance: 'Regular';
  src: url(/static/admin/assets/fonts/RenoMono.ott) format("ott");
} */


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

#g-recaptcha{
     align-self:center;
}

h1{
     /* font-family: 'RenoMono'; */
     text-transform: uppercase;
     letter-spacing: 0.2rem;
}
a{
     color:var(--black);
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


`;




export default GlobalStyles;