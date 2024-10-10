export const calculatePrice = (price, discount) => {
  let newPrice = price - (discount / 100) * price;
  return newPrice.toLocaleString('en-GB', { style: 'currency', currency: 'EUR' });
};
