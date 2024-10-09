import React, { useContext } from 'react';
import { UserContext } from '../store/UserContext';
import { StyledButton } from '../styes/GlobalStyles';

export const LoginButton = () => {
  const { user, logIn, logOut } = useContext(UserContext);

  return (
    <>
      {user ? (
        <StyledButton onClick={logOut}>Logout</StyledButton>
      ) : (
        <StyledButton onClick={() => logIn('Dear User')}>Login</StyledButton>
      )}
    </>
  );
};
