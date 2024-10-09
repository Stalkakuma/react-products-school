import { StyledButtonSection, StyledLogo, StyledNav } from '../styes/NavBarStyles';
import { StyledButton } from '../styes/GlobalStyles';
import { LoginButton } from './LoginButton';

export const NavBar = () => {
  return (
    <StyledNav>
      <StyledLogo>FRUITY</StyledLogo>
      <StyledButtonSection>
        <StyledButton>Home</StyledButton>
        <StyledButton>School</StyledButton>
        <LoginButton />
      </StyledButtonSection>
    </StyledNav>
  );
};
