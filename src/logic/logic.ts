import { ProductSchema } from '../schemas/product';
import { fromCentsFormat } from '../utils/utils';

export const getLowestPrice = (products: ProductSchema[]): number => {
  const lowestPriceProduct = products.reduce((prev, curr) => {
    const convertedPreviousPrice = parseFloat(prev.price?.replace('$', ''));
    const convertedCurrentPrice = parseFloat(curr.price?.replace('$', ''));
    return convertedPreviousPrice < convertedCurrentPrice ? prev : curr;
  });

  return parseFloat(lowestPriceProduct.price?.replace('$', ''));
};

export const convertPrice = (price: string): number => {
  if (price.indexOf('c') > -1) {
    return fromCentsFormat(parseFloat(price.replace('c', '')));
  } else if (price.indexOf('$') > -1) {
    return parseFloat(price.replace('$', ''));
  }
  return 0;
};
