import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CustomerRequest } from "../../types/Customer";
import { CustomerSchema } from "../../schemas/Dashboard";
import { CustomerServices } from "../../services/Customer";
import { useNavigate } from "react-router-dom";

export const UseCustomer = () => {
  const refresh = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<CustomerRequest>({
    resolver: zodResolver(CustomerSchema),
    defaultValues: {
      address: "",
      cpf: "",
      email: "",
      name: "",
      phone: "",
    },
  });

  const onSubmit = handleSubmit(
    async (data) =>
      await CustomerServices.Create(data)
        .then(() => {
          console.log("O cliente foi cadastrada com sucesso!");
          refresh(0);
        })
        .catch(() =>
          console.error(
            "Não foi possível adicionar a cliente, verifique os dados e tente novamente"
          )
        )
  );

  return {
    onSubmit,
    control,
    errors,
    isSubmitting,
  };
};
