import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignInSchema } from "../schemas/Sign";
import { UserSignInRequest } from "../types/User";
import { UserServices } from "../services/User";

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

  const onSubmit = handleSubmit(
    async (data) => await UserServices.SignIn(data)
  );

  return { onSubmit, control, errors, isSubmitting };
};
