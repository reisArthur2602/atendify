import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignInSchema } from "../schemas/Sign";
import { UserSignInRequest } from "../types/User";

export const useSignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<UserSignInRequest>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "guest@guest.com",
      password: "123456",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log("Dados do formulário:", data);
  });

  return { onSubmit, control, errors, isSubmitting  };
};
