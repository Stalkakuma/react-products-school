import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: Arial, sans-serif;
    background-color: #7c7575;
    height: 100%;
  }

  #root {
    --primaryPink: #f2cfcf;
    --backgroundGray: #7c7575;
    --lighterBackground: #968f8f;

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
  background-color: var(--backgroundGray);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: large;
  cursor: pointer;

  &:hover {
    background-color: var(--primaryPink);
  }
`;
