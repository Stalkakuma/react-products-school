import { StyledButtonSection, StyledLogo, StyledNav } from '../styes/NavBarStyles';
import { StyledButton } from '../styes/GlobalStyles';

export const NavBar = () => {
  return (
    <StyledNav>
      <StyledLogo>FRUITY</StyledLogo>
      <StyledButtonSection>
        <StyledButton>Home</StyledButton>
        <StyledButton>School</StyledButton>
        <StyledButton>Food</StyledButton>
      </StyledButtonSection>
    </StyledNav>
  );
};
