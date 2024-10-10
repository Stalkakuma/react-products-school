import { calculatePrice } from '../scripts/conversions';
import { StyledCardInfo, StyledImage, StyledCard, StyledImageBox, StyledDiscountBox } from '../styes/ProductSection';

export const Product = ({ product, handleShow }) => {
  const { title, description, images, price, stock, discountPercentage } = product;

  return (
    <>
      <StyledCard onClick={() => handleShow(product)}>
        {discountPercentage === 0 || !discountPercentage ? (
          <StyledDiscountBox>NEW!</StyledDiscountBox>
        ) : (
          <StyledDiscountBox>ON SALE!</StyledDiscountBox>
        )}
        <StyledImageBox>
          <StyledImage src={images[0]} alt={title} />
        </StyledImageBox>
        <StyledCardInfo>
          <h2>{title}</h2>
          <span>{discountPercentage ? calculatePrice(parseInt(price), discountPercentage) : price}</span>
          <p>{description}</p>
        </StyledCardInfo>
      </StyledCard>
    </>
  );
};
