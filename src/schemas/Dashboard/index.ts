import { z } from "zod";

export const CategorySchema = z.object({
    name: z
    .string({required_error:'O nome é obrigatório'})
    .trim()
    .min(2, { message: "Deve conter no mínimo 2 caracteres" }),
})