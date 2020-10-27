import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration:none;
}
*:focus{
  outline:0;
}
html{
  font-size:62.5%
}

@media (max-width: 1625px) {
  html{
    font-size:50%
  }
}
@media (max-width: 1310px) {
  html{
    font-size:40%
  }
}

@media (max-width: 450px) {
  html{
    font-size:30%
  }
}

html,
body,
#__next {
  height: 100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  flex:1;
  z-index: 1;
  font-family: 'Roboto', sans-serif;
  text-size-adjust: none;
}

@media (max-width: 500px) {
  html,
  body,
  #__next {
    min-height: 100%;
  }
}

body, input, button{
  font-size: 16px;
}

body {
  -webkit-font-smoothing: antialiased !important;
  text-rendering: optimizeLegibility !important;
  background: #000;
  max-width: 100vw;
}
`;
