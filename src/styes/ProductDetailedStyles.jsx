import styled from 'styled-components';
import { StyledButton } from './GlobalStyles';

export const DetailedContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
`;

export const DetailedComponent = styled.article`
  display: flex;
  flex-flow: row wrap;
  margin-top: 1rem;
  background-color: var(--card);
  font-size: larger;
  border-radius: 10pt;
`;

export const DetailedImageContainer = styled.div`
  border-top-left-radius: 5pt;
  border-bottom-left-radius: 5pt;
  border-top: solid 1px black;
  border-left: solid 1px black;
  border-bottom: solid 1px black;
  width: 35%;
  position: relative;
  background-color: white;
`;

export const DetailsImage = styled.img`
  object-fit: contain;
  max-height: 50vh;
`;

export const DetailedProductDetails = styled.article`
  display: flex;
  flex-flow: column wrap;
  width: 65%;
  gap: 2rem;
  margin: 2rem 0rem;
  padding: 0rem 6rem;
  border-top: solid 1px var(--card);
  border-bottom: solid 1px var(--card);
`;

export const DetailedProductPrice = styled.div`
  display: flex;
  align-items: end;
  gap: 0.5rem;
`;

export const DetailedInitialPrice = styled.p`
  text-decoration-line: line-through;
  filter: brightness(90%);
  font-size: medium;
`;

export const DetailedStatusContainer = styled.div`
  display: flex;
  align-items: start;
  flex-flow: column wrap;
`;

export const DetailedStatus = styled.div`
  background-color: ${(props) => (props.avlStatus.indicator === 'green' ? '#017037' : 'yellow' ? 'yellow' : 'red')};
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;

export const DetailedStatusShipping = styled.span`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 1rem;
`;

export const DetailedStatusInfo = styled.p`
  margin-left: 2rem;
  font-size: medium;
  opacity: 0.8;
`;

export const DetailedBand = styled.div`
  background-color: #f5f5fa;
  color: var(--card);
  width: 50%;
  text-align: center;
  border-radius: 5pt;
  padding: 0.5rem 1rem;
  outline: 2px solid #e5e5eb;
`;

export const DetailedBrandImage = styled(DetailedBand)`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  justify-self: center;
  margin-bottom: 0.5rem;
`;

export const DetailedDescription = styled.p`
  padding: 2rem 1rem;
  background-color: var(--backgroundGray);
  border-radius: 10pt;
  outline: 1pt solid #e5e5eb;
`;

export const DetailedNextPage = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: auto;
`;

export const DetailedPrev = styled(StyledButton)`
  color: white;
  justify-self: start;
  background-color: var(--lighterBackground);
`;

export const DetailedNext = styled(StyledButton)`
  color: white;
  margin-left: auto;
  background-color: var(--lighterBackground);
`;
