import { api } from "../lib/Axios";
import { Customer, CustomerRequest } from "../types/Customer";

const customerEndpoint = "/client";

const Create = async (data: CustomerRequest) =>
  await api.post(customerEndpoint, data);

const Get = async () => (await api.get<Customer[]>(customerEndpoint)).data;

const Delete = async (id: string) =>
  await api.delete(customerEndpoint + "?id=" + id);

export const CustomerServices = {
  Create,
  Get,
  Delete,
};
