export type MenuType = {
  id: string;
  slug: string;
  title: string;
  desc?: string | undefined;
  img?: string | undefined;
  color: string;
}[];
export type ProductType = {
  id: string;
  title: string;
  desc?: string | undefined;
  img?: string | undefined;
  price: number;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
};
export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  status: string;
  createdAt: Date;
  intent_id?: string;
};
export type CartItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};

export type CartType = {
  products: CartItemType[];
  totalPrice: number;
  totalItems: number;
};
export type ActionTypes = {
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
};
