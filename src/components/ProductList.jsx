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
} from '../styes/ProductSection';
import { StyledButton } from '../styes/GlobalStyles';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [modalProduct, setModalProduct] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const changeModal = () => setIsModalOpen(false);

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
      {productList.length === 0 && <StyledToast>Loading...</StyledToast>}
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
              <StyledModalButtonBox>
                <StyledButton onClick={() => triggerToast()}>Add to Cart</StyledButton>
                <StyledButton onClick={() => changeModal()}>Close</StyledButton>
              </StyledModalButtonBox>
            </StyledCardInfo>
          </StyledModalCard>
        </StyledModalOverlay>
      )}
    </>
  );
};
