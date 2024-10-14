import { Product } from './Product';
import {
  StyledGrid,
  StyledModalOverlay,
  StyledModalImageBox,
  StyledModalCard,
  StyledImage,
  StyledCardInfo,
  StyledModalButtonBox,
  StyledToast,
  StyledModalCardWrapper,
} from '../styes/ProductSection';
import { StyledButton } from '../styes/GlobalStyles';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LoadingScreen } from './loadingScreen/LoadingScreen';

export const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [modalProduct, setModalProduct] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const changeModal = () => setIsModalOpen(false);
  const isLoading = productList.length === 0;

  const handleShow = (product) => {
    setModalProduct(product);
    setIsModalOpen(true);
  };

  const triggerToast = () => {
    setIsModalOpen(false);
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
      {isLoading && (
        <StyledGrid>
          <LoadingScreen />
        </StyledGrid>
      )}
      {showToast && (
        <StyledToast>
          <p>{modalProduct?.title} added to cart!</p>
          <p>Thank you!</p>
        </StyledToast>
      )}
      <StyledGrid>
        {productList.map((product) => (
          <Product key={product.title} product={product} handleShow={handleShow} />
        ))}
      </StyledGrid>

      {isModalOpen && (
        <StyledModalOverlay>
          <StyledModalCardWrapper>
            <StyledModalCard>
              <StyledModalImageBox>
                <StyledImage src={modalProduct?.images[0]} alt={modalProduct?.title} />
                <p>{modalProduct?.description}</p>
              </StyledModalImageBox>
              <StyledCardInfo>
                <h2>{modalProduct?.title}</h2>
                <span>
                  {modalProduct?.stock}/{modalProduct?.stock} units available
                </span>
              </StyledCardInfo>
            </StyledModalCard>
            <StyledModalButtonBox>
              <StyledButton onClick={() => triggerToast()}>Add to Cart</StyledButton>
              <StyledButton onClick={() => changeModal()}>Close</StyledButton>
            </StyledModalButtonBox>
          </StyledModalCardWrapper>
        </StyledModalOverlay>
      )}
    </>
  );
};
