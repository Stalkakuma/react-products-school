import { Product } from './Product';
import { shirtsList } from '../assets/data-imports';
import {
  StyledGrid,
  StyledUserGreeting,
  StyledModalOverlay,
  StyledModalImageBox,
  StyledModalCard,
  StyledImage,
  StyledCardInfo,
  StyledModalButtonBox,
  StyledToast,
} from '../styes/ProductSection';
import { StyledButton } from '../styes/GlobalStyles';
import React, { useContext, useState } from 'react';
import { UserContext } from '../store/UserContext';

export const ProductList = () => {
  const { user } = useContext(UserContext);
  const [modalProduct, setModalProduct] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const changeModal = () => setIsModalOpen(false);

  const handleShow = (product) => {
    setModalProduct(product);
    setIsModalOpen(true);
  };

  const triggerToast = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      <StyledUserGreeting>{user ? <h2>Welcome {user.name}</h2> : <h2>You are not logged in!</h2>}</StyledUserGreeting>
      <StyledGrid>
        {shirtsList.map((product) => (
          <Product key={product.title} product={product} handleShow={handleShow} />
        ))}
      </StyledGrid>

      {isModalOpen && (
        <StyledModalOverlay>
          <StyledModalCard>
            <StyledModalImageBox>
              <StyledImage src={modalProduct?.image} alt={modalProduct?.title} />
              {showToast && (
                <StyledToast>
                  <p>{modalProduct?.title} added to cart!</p>
                  <p>Thank you!</p>
                </StyledToast>
              )}
            </StyledModalImageBox>
            <StyledCardInfo>
              <h2>{modalProduct?.title}</h2>
              <span>
                {modalProduct?.quantity}/{modalProduct?.quantity} units available
              </span>
              <p>{modalProduct?.text}</p>
            </StyledCardInfo>
            <StyledModalButtonBox>
              <StyledButton onClick={() => triggerToast()}>Add to Cart</StyledButton>
              <StyledButton onClick={() => changeModal()}>Close</StyledButton>
            </StyledModalButtonBox>
          </StyledModalCard>
        </StyledModalOverlay>
      )}
    </>
  );
};
