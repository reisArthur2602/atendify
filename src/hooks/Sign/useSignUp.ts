import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignUpSchema } from "../../schemas/Sign";
import { UserSignUpRequest } from "../../types/User";

import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const redirect = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<UserSignUpRequest>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    redirect("/sign/in");
  });

  return { onSubmit, control, errors, isSubmitting };
};
