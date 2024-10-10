import { Product } from './Product';
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
import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../store/UserContext';
import axios from 'axios';

export const ProductList = () => {
  const { user } = useContext(UserContext);
  const [productList, setProductList] = useState([]);
  const [modalProduct, setModalProduct] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const changeModal = () => setIsModalOpen(false);
  console.log(productList);

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

  const getProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products?limit=9');
      setProductList(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <StyledUserGreeting>{user ? <h2>Welcome {user.name}</h2> : <h2>You are not logged in!</h2>}</StyledUserGreeting>
      <StyledGrid>
        {productList.map((product) => (
          <Product key={product.title} product={product} handleShow={handleShow} />
        ))}
      </StyledGrid>

      {isModalOpen && (
        <StyledModalOverlay>
          <StyledModalCard>
            <StyledModalImageBox>
              <StyledImage src={modalProduct?.images[0]} alt={modalProduct?.title} />
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
                {modalProduct?.stock}/{modalProduct?.stock} units available
              </span>
              <p>{modalProduct?.description}</p>
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
