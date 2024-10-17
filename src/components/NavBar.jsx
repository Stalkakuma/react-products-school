import { StyledButtonSection, StyledLogo, StyledNav } from '../styes/NavBarStyles';
import { StyledUserGreeting } from '../styes/ProductSection';
import { StyledGlobalLink } from '../styes/GlobalStyles';
import { UserContext } from '../store/UserContext';
import { useContext } from 'react';

export const NavBar = () => {
  const { user } = useContext(UserContext);

  return (
    <StyledNav>
      <StyledLogo>FRUITY</StyledLogo>
      <StyledUserGreeting>{user ? <h2>Welcome {user.name}</h2> : <h2>You are not logged in!</h2>}</StyledUserGreeting>
      <StyledButtonSection>
        <StyledGlobalLink to={'/react-products-school/'}>Home</StyledGlobalLink>
        <StyledGlobalLink to={'/react-products-school/products'}>Products</StyledGlobalLink>
        <StyledGlobalLink to={'/react-products-school/product-form'}>Create</StyledGlobalLink>
        <StyledGlobalLink to={'/react-products-school/user'}>{user ? 'Profile' : 'Login'}</StyledGlobalLink>
      </StyledButtonSection>
    </StyledNav>
  );
};
