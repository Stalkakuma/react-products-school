import styled from 'styled-components';

export const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 3rem 6rem;
`;

export const StyledImage = styled.img`
  height: 500px;
  border: 2px solid #f2cfcf;
  border-radius: 1rem;
`;

export const StyledCardInfo = styled.div`
  padding: 2rem;
`;

export const StyledCard = styled.article`
  border: 4px solid #f2cfcf;
  border-radius: 1rem;
  background-color: #968f8f;
  box-shadow: 10px 10px 10px gray;
  display: flex;
  flex-flow: column wrap;
`;

export const StyledImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const StyledDiscountBox = styled.span`
  background-color: #e0a330;
  border: 2px solid #f2cfcf;
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalCard = styled(StyledCard)`
  width: 30%;
  position: relative;
`;

export const StyledModalButtonBox = styled.div`
  display: flex;
  padding: 0rem 2rem 0rem 2rem;
  justify-content: space-between;
`;

export const StyledToast = styled.div`
  background-color: #f2cfcf;
  position: absolute;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: large;
  text-align: center;
`;
