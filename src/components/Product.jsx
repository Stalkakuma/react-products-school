import { calculatePrice } from '../scripts/conversions';
import { StyledButton } from '../styes/GlobalStyles';
import {
  StyledCardInfo,
  StyledImage,
  StyledCard,
  StyledImageBox,
  StyledDiscountBox,
  StyledModalOverlay,
  StyledModalCard,
  StyledModalButtonBox,
  StyledToast,
  StyledModalImageBox,
} from '../styes/ProductSection';
import { useState } from 'react';

export const Product = ({ props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const changeModal = () => setIsModalOpen(!isModalOpen);
  const triggerToast = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      {isModalOpen && (
        <StyledModalOverlay>
          <StyledModalCard>
            <StyledModalImageBox>
              <StyledImage src={props.image} alt={props.title} />
              {showToast && (
                <StyledToast>
                  <p>{props.title} added to cart!</p>
                  <p>Thank you!</p>
                </StyledToast>
              )}
            </StyledModalImageBox>
            <StyledCardInfo>
              <h2>{props.title}</h2>
              <span>
                {props.quantity}/{props.quantity} units available
              </span>
              <p>{props.text}</p>
            </StyledCardInfo>
            <StyledModalButtonBox>
              <StyledButton onClick={() => triggerToast()}>Add to Cart</StyledButton>
              <StyledButton onClick={() => changeModal()}>Close</StyledButton>
            </StyledModalButtonBox>
          </StyledModalCard>
        </StyledModalOverlay>
      )}
      <StyledCard onClick={() => changeModal()}>
        {props.discount === 0 || !props.discount ? (
          <StyledDiscountBox>NEW!</StyledDiscountBox>
        ) : (
          <StyledDiscountBox>ON SALE!</StyledDiscountBox>
        )}
        <StyledImageBox>
          <StyledImage src={props.image} alt={props.title} />
        </StyledImageBox>
        <StyledCardInfo>
          <h2>{props.title}</h2>
          <span>${props.discount ? calculatePrice(parseInt(props.price), props.discount) : props.price}</span>
          <p>{props.text}</p>
        </StyledCardInfo>
      </StyledCard>
    </>
  );
};
