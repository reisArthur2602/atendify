import { api } from "../lib/Axios";
import { Category, CategoryRequest } from "../types/Category";

const categoryEndpoint = "/category";

const Create = async (data: CategoryRequest) =>
  await api.post(categoryEndpoint, data);

const Get = async () => (await api.get<Category[]>(categoryEndpoint)).data;

const Delete = async (id: string) =>
  await api.delete(categoryEndpoint + "?id=" + id);

export const CategoryServices = { Create, Get, Delete };
