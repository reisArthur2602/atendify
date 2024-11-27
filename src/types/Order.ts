import { Category } from "./Category";
import { Customer } from "./Customer";

export type Order = {
  id: string;
  status: boolean;
  description: string;
  created_at: Date;
  category: Category;
  client: Customer;
  user: { id: string; username: string };
};

export type OrderRequest = {
  clientId: string;
  category_id: string;
  description: string;
};
