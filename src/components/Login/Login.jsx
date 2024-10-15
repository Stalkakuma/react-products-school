import { StyledSizingWrapper } from '../../styes/GlobalStyles';
import { StyledLoginCard, StyledLoginContainer } from '../../styes/LoginStyles';
import { LoginButton } from '../LoginButton';

export const Login = () => {
  return (
    <StyledLoginContainer>
      <StyledSizingWrapper>
        <StyledLoginCard>
          <h2>Here to login</h2>
          <LoginButton>Login</LoginButton>
        </StyledLoginCard>
      </StyledSizingWrapper>
    </StyledLoginContainer>
  );
};
