import styled, { createGlobalStyle } from 'styled-components';

export const StyledApp = styled.div`
  background-color: #7c7575;
  color: white;
`;

export const StyledButton = styled.button`
  background-color: #7c7575;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: large;
  cursor: pointer;

  &:hover {
    background-color: #f2cfcf;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    height: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
