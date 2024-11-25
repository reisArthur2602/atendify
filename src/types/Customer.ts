export type Customer = {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  cpf: string;
  userId: string;
  created_at: string;
};

export type CustomerRequest = {
  name: string;
  email: string;
  address: string;
  phone: string;
  cpf: string;
};
