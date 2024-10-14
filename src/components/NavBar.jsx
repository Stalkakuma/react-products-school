import { StyledButtonSection, StyledLogo, StyledNav } from '../styes/NavBarStyles';
import { StyledUserGreeting } from '../styes/ProductSection';
import { StyledButton } from '../styes/GlobalStyles';
import { LoginButton } from './LoginButton';
import { UserContext } from '../store/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <StyledNav>
      <StyledLogo>FRUITY</StyledLogo>
      <StyledUserGreeting>{user ? <h2>Welcome {user.name}</h2> : <h2>You are not logged in!</h2>}</StyledUserGreeting>
      <StyledButtonSection>
        <StyledButton onClick={() => navigate('/react-products-school/')}>Home</StyledButton>
        <StyledButton onClick={() => navigate('/react-products-school/products')}>Products</StyledButton>
        <LoginButton />
      </StyledButtonSection>
    </StyledNav>
  );
};
