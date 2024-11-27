import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignUpSchema } from "../../schemas/Sign";
import { UserSignUpRequest } from "../../types/User";

import { useNavigate } from "react-router-dom";
import { UserServices } from "../../services/User";
import { toast } from "react-toastify";

export const useSignUp = () => {
  const navigate = useNavigate();

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
        .then(() => {
          toast.success(`A conta foi criada com sucesso, faça login!`);
          navigate("/sign", { replace: true });
        })
        .catch(() =>
          toast.error(
            "Erro ao cadastrar sua conta, verifique os dados e tente novamente"
          )
        )
  );

  return { onSubmit, control, errors, isSubmitting };
};
