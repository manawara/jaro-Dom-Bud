import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.white}
  }
  
  a, button,input,textarea {
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white}
                                                
  }
  figure {
    margin: 0;
  }
`;
