import { StyledButton } from '../../styes/GlobalStyles';
import { DetailedComponent, DetailedContainer } from '../../styes/ProductDetailedStyles';
import { Outlet, useParams } from 'react-router-dom';

export const ProductDetailed = () => {
  let { id } = useParams();

  return (
    <DetailedContainer>
      <DetailedComponent>
        <h3 style={{ color: 'red' }}>Lor wd a sdadkeoaff w</h3>
        <StyledButton> Show ME {id}</StyledButton>
      </DetailedComponent>
    </DetailedContainer>
  );
};
