import { z } from "zod";

export const CategorySchema = z.object({
  name: z.string().trim().min(2, { message: "O nome é obrigatório" }),
});

export const CustomerSchema = z.object({
  name: z.string().trim().min(1, { message: "O nome é obrigatório" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "O email é obrigatório" })
    .email({ message: "Email inválido" }),
  address: z.string().trim().min(1, { message: "O endereço é obrigatório" }),
  phone: z
    .string({ invalid_type_error: "O telefone é obrigatório" })
    .trim()
    .length(11, {
      message: "Deve estar no formato (xx) xxxxx-xxxx",
    }),
  cpf: z
    .string()
    .trim()
    .length(11, { message: "Deve estar no formato xxx.xxx.xxx-xx" }),
});
