import { api } from "../lib/Axios";
import { Order, OrderRequest } from "../types/Order";

const orderEndpoint = "/order";

const Create = async (data: OrderRequest) =>
  await api.post(orderEndpoint, data);

const Get = async () => (await api.get<Order[]>(orderEndpoint)).data;

const Delete = async (id: string) =>
  await api.delete(orderEndpoint + "?id=" + id);

const Finish = async (id: string) =>
  await api.patch(orderEndpoint + "?id=" + id);

export const OrderServices = {
  Create,
  Get,
  Delete,
  Finish,
};
