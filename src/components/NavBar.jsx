import { StyledButtonSection, StyledLogo, StyledNav } from '../styes/NavBarStyles';
import { StyledUserGreeting } from '../styes/ProductSection';
import { StyledButton } from '../styes/GlobalStyles';
import { LoginButton } from './LoginButton';
import { UserContext } from '../store/UserContext';
import { useContext } from 'react';

export const NavBar = () => {
  const { user } = useContext(UserContext);

  return (
    <StyledNav>
      <StyledLogo>FRUITY</StyledLogo>
      <StyledUserGreeting>{user ? <h2>Welcome {user.name}</h2> : <h2>You are not logged in!</h2>}</StyledUserGreeting>
      <StyledButtonSection>
        <StyledButton>Home</StyledButton>
        <StyledButton>School</StyledButton>
        <LoginButton />
      </StyledButtonSection>
    </StyledNav>
  );
};
