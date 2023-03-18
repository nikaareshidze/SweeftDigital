import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

input, textarea, select, button {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-radius: 0;
  border: 0;
  background-color: transparent;
}

body {
  font-family: Arial, Helvetica, Sans-Serif,;
  font-size: 16px;
  line-height: 1.5;
}

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
