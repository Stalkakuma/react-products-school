import { useContext, useState } from 'react';
import { StyledButton, StyledSizingWrapper } from '../../styes/GlobalStyles';
import { StyledLoginCard, StyledLoginContainer } from '../../styes/LoginStyles';
import { UserContext } from '../../store/UserContext';

export const Login = () => {
  const [nameInput, setNameInput] = useState('');
  const { logIn, user, logOut } = useContext(UserContext);
  const handleInput = (e) => {
    setNameInput(e.target.value);
  };

  const handleLogin = () => {
    logIn(nameInput);
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <StyledLoginContainer>
      <StyledSizingWrapper>
        <StyledLoginCard>
          <h2>User Page</h2>
          {!user && (
            <>
              <label>Name:</label>
              <input onChange={handleInput} value={nameInput} type="text" />
              <StyledButton onClick={handleLogin}>Login</StyledButton>
            </>
          )}
          {user && (
            <div>
              <StyledButton onClick={handleLogout}>Logout</StyledButton>
            </div>
          )}
        </StyledLoginCard>
      </StyledSizingWrapper>
    </StyledLoginContainer>
  );
};
