'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --green-ligth: #f5fefa;
    --green-midlle: #068762;
    --gray-ligth: #807474;
  }
`;

export default GlobalStyle;
