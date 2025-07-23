export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  export type CartItem = Product & { quantity: number };
  
  export type RootStackParamList = {
    ProductListing: undefined;
    ProductDetail: { productId: number };
  };