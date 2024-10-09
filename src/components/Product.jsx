import { calculatePrice } from '../scripts/conversions';
import { StyledCardInfo, StyledImage, StyledCard, StyledImageBox, StyledDiscountBox } from '../styes/ProductSection';

export const Product = ({ product, handleShow }) => {
  const { title, image, price, text, category, quantity, discount } = product;

  return (
    <>
      <StyledCard onClick={() => handleShow(product)}>
        {discount === 0 || !discount ? (
          <StyledDiscountBox>NEW!</StyledDiscountBox>
        ) : (
          <StyledDiscountBox>ON SALE!</StyledDiscountBox>
        )}
        <StyledImageBox>
          <StyledImage src={image} alt={title} />
        </StyledImageBox>
        <StyledCardInfo>
          <h2>{title}</h2>
          <span>${discount ? calculatePrice(parseInt(price), discount) : price}</span>
          <p>{text}</p>
        </StyledCardInfo>
      </StyledCard>
    </>
  );
};
