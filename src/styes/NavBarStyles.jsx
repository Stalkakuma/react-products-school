import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #8d8d8d;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 1rem;

  &:hover {
    background-color: #f2b9ac;
    outline: 2px solid #f2b9ac;
  }
`;

export const StyledNav = styled.nav`
  padding: 0rem 6rem;
  background-color: #968f8f;
  display: flex;
  gap: 1rem;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.h1`
  background-color: #7c7575;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  font-size: x-large;
  color: #f2cfcf;
`;

export const StyledButtonSection = styled.section`
  display: flex;
  gap: 1rem;
`;
