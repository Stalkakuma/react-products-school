import styled from 'styled-components';

export const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 3rem 6rem;
  width: 100%;
`;

export const StyledImage = styled.img`
  max-height: 300px;
  object-fit: contain;
`;

export const StyledCardInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

export const StyledCard = styled.article`
  border-radius: 1rem;
  background-color: var(--card);
  box-shadow: 10px 10px 10px gray;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-flow: column wrap;
  min-height: 447px;
  cursor: pointer;

  &:hover {
    box-shadow: 0.5rem 0.5rem 1.2rem 0.4rem var(--backgroundGray);
  }
`;

export const StyledImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
`;

export const StyledModalImageBox = styled(StyledImageBox)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: large;
`;

export const StyledDiscountBox = styled.span`
  background-color: #e0a330;
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
  flex-flow: column wrap;
`;

export const StyledModalCard = styled(StyledCard)`
  position: relative;
  border-radius: 0%;
  padding: 1rem 2rem;
  font-size: large;
  cursor: auto;
  box-shadow: none;

  &:hover {
    box-shadow: none;
  }
`;

export const StyledModalCardWrapper = styled.div`
  background-color: var(--lighterBackground);
  border-radius: 1rem;
  width: 50%;
  overflow: hidden;
`;

export const StyledModalButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
`;

export const StyledToast = styled.div`
  background-color: var(--card);
  border: 5pt solid var(--backgroundGray);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 10%;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: x-large;
  text-align: center;
  margin: 8rem 30%;
`;

export const StyledUserGreeting = styled.section`
  display: flex;
  flex-flow: column wrap;
  text-align: center;
`;
