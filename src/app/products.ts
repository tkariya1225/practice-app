export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 99000,
    stock: 50,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 88000,
    stock: 45,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 77000,
    stock: 30,
    description: ''
  }
];
