import { api } from "../lib/Axios";
import { CategoryRequest } from "../types/Category";

const categoryEndpoint = "/category";

const Create = async (data: CategoryRequest) =>
  await api.post(categoryEndpoint, data);

export const CategoryServices = { Create };
