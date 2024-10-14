import { StyledLoader } from '../../styes/GlobalStyles';
import { StyledCard, StyledCardInfo, StyledImageBox } from '../../styes/ProductSection';

export const LoadingScreen = () => {
  const loadingList = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {loadingList.map((item) => (
        <StyledCard key={item}>
          <StyledImageBox>
            <StyledLoader />
          </StyledImageBox>
          <StyledCardInfo>
            <h2>...</h2>
            <p>...</p>
          </StyledCardInfo>
        </StyledCard>
      ))}
    </>
  );
};
