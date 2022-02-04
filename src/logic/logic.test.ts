import { convertPrice, getLowestPrice } from './logic';

describe('logic', () => {
  it('get minimum price', () => {
    const products = [
      {
        id: 1,
        name: 'Caramel',
        price: '$3.10',
        stock: 3,
      },
      {
        id: 2,
        name: 'Hazelnut',
        price: '$2.50',
        stock: 3,
      },
      {
        id: 3,
        name: 'Organic Raw',
        price: '$2.00',
        stock: 3,
      },
    ];

    expect(getLowestPrice(products)).toEqual(2);
  });

  it('convert price', () => {
    const priceDollar = '$15';
    const priceCents = '50c';
    expect(convertPrice(priceDollar)).toEqual(15);
    expect(convertPrice(priceCents)).toEqual(0.5);
  });
});
