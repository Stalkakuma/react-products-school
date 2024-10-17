import { StyledSizingWrapper } from '../../styes/GlobalStyles';

export const Unauthorized = () => {
  return (
    <StyledSizingWrapper>
      <h1 style={{ color: 'var(--card)' }}>You have no permissions to view this page</h1>
    </StyledSizingWrapper>
  );
};
