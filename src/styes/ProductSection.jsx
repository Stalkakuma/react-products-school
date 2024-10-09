import styled from 'styled-components';

export const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 250rem;
  gap: 3rem;
  padding: 3rem 6rem;
  align-content: center;
`;

export const StyledImage = styled.img`
  border: 2px solid var(--primaryPink);
  border-radius: 1rem;
  max-height: 300px;
`;

export const StyledCardInfo = styled.div`
  padding: 2rem;
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
`;

export const StyledCard = styled.article`
  border: 4px solid var(--primaryPink);
  border-radius: 1rem;
  background-color: var(--lighterBackground);
  box-shadow: 10px 10px 10px gray;
  display: flex;
  flex-flow: column wrap;
  cursor: pointer;

  &:hover {
    box-shadow: 0.5rem 0.5rem 1.2rem 0.4rem var(--primaryPink);
  }
`;

export const StyledImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  max-height: 300px;
`;

export const StyledModalImageBox = styled(StyledImageBox)`
  max-height: 30vh;
`;

export const StyledDiscountBox = styled.span`
  background-color: #e0a330;
  border: 2px solid var(--primaryPink);
  border-radius: 0.2rem;
  padding: 0 8pt 0pt 8pt;
  font-size: large;
  margin-left: 35%;
  margin-right: 35%;
  text-align: center;
`;

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalCard = styled(StyledCard)`
  position: relative;
  padding: 3rem;
  width: 40%;
  width: 800px;

  &:hover {
    box-shadow: none;
  }
`;

export const StyledModalButtonBox = styled.div`
  display: flex;
  padding: 0rem 2rem 0rem 2rem;
  justify-content: space-between;
`;

export const StyledToast = styled.div`
  background-color: var(--primaryPink);
  position: absolute;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: x-large;
  text-align: center;
`;

export const StyledUserGreeting = styled.section`
  padding: 3rem 6rem;
  display: flex;
  flex-flow: column wrap;
  text-align: center;
`;
