import { useState } from 'react';
import { StyledButton, StyledSizingWrapper } from '../../styes/GlobalStyles';
import {
  CreateContainer,
  CreateForm,
  CreateInputWrapper,
  CreateResponseToast,
  CreateWrapperButton,
} from '../../styes/ProductCreateStyles';
import axios from 'axios';

const ProductCreate = () => {
  const [productForm, setProductForm] = useState({
    productTitle: '',
    productPrice: 0,
    productDesc: '',
    productStock: 0,
    productRating: 0,
  });

  const [formErrors, setFormErrors] = useState({
    tittleError: '',
    priceError: '',
    descError: '',
  });

  const [postResponse, setPostResponse] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setFormErrors({
      ...formErrors,
      tittleError: '',
      priceError: '',
      descError: '',
    });
    setProductForm({
      ...productForm,
      [e.target.name]: e.target.value,
    });
  };

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (productForm.productTitle.length < 3) {
      newErrors.tittleError = 'Must contain at least 3 characters';
    }
    if (productForm.productPrice < 0) {
      newErrors.priceError = 'Must not be a negative number';
    }
    if (productForm.productDesc.length < 10) {
      newErrors.descError = 'Must contain at least 10 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setFormErrors({ ...formErrors, ...newErrors });
    } else {
      axios
        .post('https://dummyjson.com/products/add', productForm)
        .then((response) => {
          setPostResponse(response.statusText);
          triggerToast();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <StyledSizingWrapper>
      <CreateContainer>
        <h2 style={{ textAlign: 'center' }}>Create new product</h2>
        {showToast && (
          <CreateResponseToast>
            <p>{postResponse}</p>
          </CreateResponseToast>
        )}
        <CreateForm onSubmit={handleSubmit}>
          <CreateInputWrapper>
            <label>Name of Product:</label>
            <input name="productTitle" value={productForm.title} onChange={handleForm} />
            <div>{formErrors.tittleError}</div>
          </CreateInputWrapper>
          <CreateInputWrapper>
            <label>Price of product:</label>
            <input name="productPrice" type="number" value={productForm.price} onChange={handleForm} />
            <div>{formErrors.priceError}</div>
          </CreateInputWrapper>
          <CreateInputWrapper>
            <label>Describe product:</label>
            <textarea name="productDesc" onChange={handleForm} value={productForm.productDesc} />
            <div>{formErrors.descError}</div>
          </CreateInputWrapper>
          <CreateInputWrapper>
            <label>Enter amount of stock:</label>
            <input name="productStock" type="number" value={productForm.productStock} onChange={handleForm} min="1" />
          </CreateInputWrapper>
          <CreateInputWrapper>
            <label>Enter rating:</label>
            <input
              name="productRating"
              type="number"
              value={productForm.productRatingS}
              onChange={handleForm}
              max="5"
              min="0"
            />
          </CreateInputWrapper>
          <CreateWrapperButton>
            <StyledButton type="submit">Submit</StyledButton>
          </CreateWrapperButton>
        </CreateForm>
      </CreateContainer>
    </StyledSizingWrapper>
  );
};

export default ProductCreate;
