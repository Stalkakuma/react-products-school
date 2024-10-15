import {
  HeroImage,
  HeroSection,
  StyledHeading,
  StyledLink,
  StyledListItem,
  StyledServices,
  StyledServicesContainer,
} from '../../styes/DashboardStyles';
import { StyledSizingWrapper } from '../../styes/GlobalStyles';
import { Contacts } from './Contacts';

export const Dashboard = () => {
  return (
    <>
      <HeroSection>
        <HeroImage src="./backgroundImage.jpg" alt="background image" />
        <StyledHeading>Welcome!</StyledHeading>
      </HeroSection>
      <StyledServicesContainer>
        <StyledSizingWrapper>
          <StyledServices>
            <h2>WHAT WE OFFER:</h2>
            <ul>
              <StyledListItem>
                CHECK OUT OUR <StyledLink to={'/react-products-school/products'}>PRODUCTS</StyledLink>
              </StyledListItem>
            </ul>
          </StyledServices>
        </StyledSizingWrapper>
      </StyledServicesContainer>
      <Contacts />
    </>
  );
};
