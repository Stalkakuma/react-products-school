import styled from 'styled-components';

export const StyledLoginContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  background-color: var(--backgroundGray);
  height: 100vh;
`;

export const StyledLoginCard = styled.article`
  display: flex;
  flex-flow: column wrap;
  background-color: var(--lighterBackground);
  align-content: center;
  justify-content: center;
  gap: 2rem;
  border-radius: 15pt;
  height: 70vh;
`;
