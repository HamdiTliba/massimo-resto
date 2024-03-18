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
