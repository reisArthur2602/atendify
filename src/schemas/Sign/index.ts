import { z } from "zod";

const SignInSchema = z.object({
  email: z
    .string()
    .trim()
    .min(3, { message: "O email é obrigatório" })
    .email({ message: "Email inválido" }),
  password: z
    .string()
    .trim()
    .min(6, { message: "Deve conter no mínimo 6 caracteres" }),
});

const SignUpSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "O email é obrigatório" })
    .email({ message: "Email inválido" }),
  username: z
    .string()
    .trim()
    .min(2, { message: "Deve conter no mínimo 2 caracteres" }),
  password: z
    .string({ required_error: "A senha é obrigatória" })
    .trim()
    .min(5, { message: "Deve conter no mínimo 6 caracteres" }),
});

export { SignInSchema, SignUpSchema };
