import { Product } from './Product';
import { shirtsList } from '../assets/data-imports';
import { StyledGrid, StyledUserGreeting } from '../styes/ProductSection';
import React, { useContext } from 'react';
import { UserContext } from '../store/UserContext';

export const ProductList = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <StyledUserGreeting>{user ? <h2>Welcome {user.name}</h2> : <h2>You are not logged in!</h2>}</StyledUserGreeting>
      <StyledGrid>
        {shirtsList.map((shirt) => (
          <Product key={shirt.title} props={shirt} />
        ))}
      </StyledGrid>
    </>
  );
};
