export const calculatePrice = (price, discount) => {
  let newPrice = price - (discount / 100) * price;
  return addZero(newPrice);
};

const addZero = (numb) => {
  let numStr = numb.toString();
  while (numStr.length < 5) {
    numStr = numStr + '0';
  }
  return numStr;
};
