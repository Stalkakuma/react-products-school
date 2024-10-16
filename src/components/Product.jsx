import { calculatePrice } from '../scripts/conversions';
import { StyledCardInfo, StyledImage, StyledCard, StyledImageBox, StyledDiscountBox } from '../styes/ProductSection';

export const Product = ({ product, handleShow }) => {
  const { title, description, images, price, stock, discountPercentage, availabilityStatus, id } = product;

  return (
    <>
      <StyledCard onClick={() => handleShow(product)}>
        {discountPercentage === 0 || !discountPercentage ? (
          <StyledDiscountBox>{availabilityStatus}</StyledDiscountBox>
        ) : (
          <StyledDiscountBox>{availabilityStatus}</StyledDiscountBox>
        )}
        <StyledImageBox>
          <StyledImage src={images[0]} alt={title} />
        </StyledImageBox>
        <StyledCardInfo>
          <h2>{title}</h2>
          <span>{discountPercentage ? calculatePrice(parseInt(price), discountPercentage) : price}&euro;</span>
        </StyledCardInfo>
      </StyledCard>
    </>
  );
};
