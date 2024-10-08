import { Product } from './Product';
import { shirtsList } from '../assets/data-imports';
import { StyledGrid } from '../styes/ProductSection';

export const ProductList = () => {
  return (
    <StyledGrid>
      {shirtsList.map((shirt) => (
        <Product key={shirt.title} props={shirt} />
      ))}
    </StyledGrid>
  );
};
