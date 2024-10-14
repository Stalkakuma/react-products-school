import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  

  #root {
    --backgroundGray: #4F4A45;
    --lighterBackground: #6C5F5B;
    --card: #ED7D31;

  }

  html, body {
    font-family: "Roboto", sans-serif;
    background-color: #F6F1EE ;
    height: 100%;
  }

  *, *::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const StyledApp = styled.div`
  color: white;
`;

export const StyledButton = styled.button`
  background-color: var(--card);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: large;
  cursor: pointer;

  &:hover {
    outline: var(--backgroundGray) solid 0.5rem;
  }
`;
