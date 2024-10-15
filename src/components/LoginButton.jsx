import React, { useContext } from 'react';
import { UserContext } from '../store/UserContext';
import { StyledButton } from '../styes/GlobalStyles';
import { useNavigate } from 'react-router-dom';

export const LoginButton = () => {
  const { user, logIn, logOut } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      {user ? (
        <StyledButton
          onClick={() => {
            logOut();
            navigate(-1);
          }}
        >
          Logout
        </StyledButton>
      ) : (
        <StyledButton
          onClick={() => {
            logIn('Dear User');
            navigate(-1);
          }}
        >
          Login
        </StyledButton>
      )}
    </>
  );
};
