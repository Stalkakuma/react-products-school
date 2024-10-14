import styled from 'styled-components';

export const StyledNav = styled.nav`
  padding: 1rem 6rem;
  background-color: var(--lighterBackground);
  display: flex;
  gap: 1rem;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.h1`
  background-color: var(--card);
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  font-size: x-large;
  color: white;
`;

export const StyledButtonSection = styled.section`
  display: flex;
  gap: 1rem;
`;
