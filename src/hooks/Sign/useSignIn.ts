import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignInSchema } from "../../schemas/Sign";
import { UserSignInRequest } from "../../types/User";
import { UserServices } from "../../services/User";
import { useAuth } from "../useAuth";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const { updateUser } = useAuth();
  const refresh = useNavigate();

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
    async (data) =>
      await UserServices.SignIn(data)
        .then((result) => {
          updateUser(result!.user);
          console.log(`A conta foi criada com sucesso, faça login!`);
          refresh(0);
        })
        .catch(() =>
          console.error(
            "Não foi possível criar a conta, verifique os dados e tente novamente"
          )
        )
  );

  return { onSubmit, control, errors, isSubmitting };
};
