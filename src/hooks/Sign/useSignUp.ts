import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignUpSchema } from "../../schemas/Sign";
import { UserSignUpRequest } from "../../types/User";

import { useNavigate } from "react-router-dom";
import { UserServices } from "../../services/User";

export const useSignUp = () => {
  const redirect = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<UserSignUpRequest>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(
    async (data) =>
      await UserServices.SignUp(data)
        .then(() => redirect("/sign/in"))
        .catch(() => console.error("Acesso Negado"))
  );

  return { onSubmit, control, errors, isSubmitting };
};
