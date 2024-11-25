import { api } from "../lib/Axios";
import { CustomerRequest } from "../types/Customer";

const customerEndpoint = "/client";

const Create = async (data: CustomerRequest) =>
  await api.post(customerEndpoint, data);

export const CustomerServices = {
  Create,
};
