import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  

  #root {
    --primaryPink: #f2cfcf;
    --backgroundGray: #7c7575;
    --lighterBackground: #968f8f;
    --cardPink: #ff69b4;
    --triadicBlue: #69b4ff;

  }

  html, body {
    font-family: "Roboto", sans-serif;
    background-color: #f2cfcf ;
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
  background-color: var(--triadicBlue);
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
