import { Category } from "./Category";

export type Order = {
  id: string;
  clientId: string;
  userId: string;
  description: string;
  category: Category;
};

export type OrderRequest = {
  clientId: string;
  category_id: string;
  description: string;
};
