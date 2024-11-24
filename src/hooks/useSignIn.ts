import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignInSchema } from "../schemas/Sign";
import { UserSignInRequest } from "../types/User";
import { UserServices } from "../services/User";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  
  const { updateUser } = useAuth();
  const redirect = useNavigate();

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

  const onSubmit = handleSubmit(async (data) => {
    const result = await UserServices.SignIn(data);
    updateUser(result!.user);
    redirect(0);
  });

  return { onSubmit, control, errors, isSubmitting };
};
