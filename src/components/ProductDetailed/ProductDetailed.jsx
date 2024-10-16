import { StyledSizingWrapper } from '../../styes/GlobalStyles';
import {
  DetailedBand,
  DetailedBrandImage,
  DetailedComponent,
  DetailedContainer,
  DetailedDescription,
  DetailedImageContainer,
  DetailedInitialPrice,
  DetailedNext,
  DetailedNextPage,
  DetailedPrev,
  DetailedProductDetails,
  DetailedProductPrice,
  DetailedStatus,
  DetailedStatusContainer,
  DetailedStatusInfo,
  DetailedStatusShipping,
  DetailsImage,
} from '../../styes/ProductDetailedStyles';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { calculatePrice } from '../../scripts/conversions';

const ProductDetailed = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState();
  const prevAvailable = id > 1;
  const nextAvailable = id < 9;
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => setProductDetails(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const goToNextProduct = () => {
    const nextProductId = Number(id) + 1;
    navigate(`/react-products-school/products/${nextProductId}`);
  };

  const goToPrevProduct = () => {
    const prevProductId = Number(id) - 1;
    navigate(`/react-products-school/products/${prevProductId}`);
  };

  const discountedPrice = calculatePrice(productDetails?.price, productDetails?.discountPercentage);

  return (
    <DetailedContainer>
      <StyledSizingWrapper>
        <DetailedComponent>
          <DetailedImageContainer>
            <DetailsImage src={productDetails?.images[0]} />
            <DetailedBrandImage>
              <h3>{productDetails?.brand}</h3>
            </DetailedBrandImage>
          </DetailedImageContainer>
          <DetailedProductDetails>
            <h2>{[productDetails?.title]}</h2>
            <DetailedProductPrice>
              <DetailedInitialPrice>{productDetails?.price}</DetailedInitialPrice>
              <p>{discountedPrice}&euro;</p>
            </DetailedProductPrice>
            <DetailedStatusContainer>
              <DetailedStatusShipping>
                <DetailedStatus
                  avlStatus={{
                    indicator:
                      productDetails?.availabilityStatus === 'In Stock' ? 'green' : 'Low Stock' ? 'yellow' : 'red',
                  }}
                />
                <p>{productDetails?.availabilityStatus}</p>
              </DetailedStatusShipping>
              <DetailedStatusInfo>{productDetails?.shippingInformation}</DetailedStatusInfo>
            </DetailedStatusContainer>
            <DetailedBand>
              <h3>{productDetails?.brand}</h3>
            </DetailedBand>
            <DetailedDescription>{productDetails?.description}</DetailedDescription>
            <DetailedNextPage>
              {prevAvailable && <DetailedPrev onClick={goToPrevProduct}>Previous</DetailedPrev>}
              {nextAvailable && <DetailedNext onClick={goToNextProduct}>Next</DetailedNext>}
            </DetailedNextPage>
          </DetailedProductDetails>
        </DetailedComponent>
      </StyledSizingWrapper>
    </DetailedContainer>
  );
};

export default ProductDetailed;
