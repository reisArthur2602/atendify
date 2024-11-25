import { Category } from "./Category";

export type Order = {
  id: string;
  clientId: string;
  userId: string;
  description: string;
  category: Category;
  created_at: string;
  status: boolean;
  user: { username: string };
};

export type OrderRequest = {
  clientId: string;
  category_id: string;
  description: string;
};
