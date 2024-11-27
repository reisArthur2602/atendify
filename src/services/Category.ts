import { api } from "../lib/Axios";
import { Category, CategoryRequest } from "../types/Category";

const categoryEndpoint = "/category";

const Create = async (data: CategoryRequest) => {
  await api.post(categoryEndpoint, data);
};

const Delete = async (id: string) => {
  await api.delete(categoryEndpoint + "?id=" + id);
};

const Get = async () => {
  const categories = (await api.get<Category[]>(categoryEndpoint)).data;
  return categories;
};

export const CategoryServices = { Create, Get, Delete };
