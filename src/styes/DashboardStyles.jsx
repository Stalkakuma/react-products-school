import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroSection = styled.section`
  background-color: var(--lighterBackground);
  display: flex;
  height: 50vh;
  position: relative;
`;

export const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const StyledHeading = styled.h1`
  position: absolute;
  text-align: center;
  align-self: center;
  font-size: 5rem;
  text-shadow: black solid 5px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const StyledContacts = styled.section`
  background-color: var(--card);
  display: flex;
  flex-flow: column wrap;
  height: 30vh;
`;

export const StyledServicesContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  height: 20vh;
  background-color: var(--lighterBackground);
`;

export const StyledServices = styled.article`
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--card);
`;

export const StyledListItem = styled.li`
  margin-left: 2rem;
`;
