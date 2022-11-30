import styled from "styled-components";
import { keyframes } from "styled-components";

const lineStroke = keyframes`
from{
  width:0%;

}

to{
  width:50%;
}
`

const Line = styled.div`
  height: 2px;
  width: 50%;
  background-image: linear-gradient(-90deg, red, blue);
  border-radius: 30px;
  margin-bottom: 1rem;
  animation: ${lineStroke} .7s ease-in;

`;


export default Line;