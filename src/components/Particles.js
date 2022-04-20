import React from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';

const StyledParticle = styled.div`
max-height:13rem;
`
export default () => (
  <StyledParticle>
    <Particles params={{
      "particles":{
        "number": {
          "value": 15,
          "density": {
            "enable": false,
            "value_area": 60
          }
        },
        "color": {
          "value": "#000000"
        },
        "shape": {
          "type": "polygon",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 7
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.2,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 10,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 500,
          "color": "#272727",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": true,
          "attract": {
            "enable": true,
            "rotateX": 200,
            "rotateY": 1500
          }
        }
      },
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance":150,
            "line_linked": {
              "opacity":0.5
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }}    
    />
  </StyledParticle>
)