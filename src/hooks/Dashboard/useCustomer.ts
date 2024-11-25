import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Customer, CustomerRequest } from "../../types/Customer";
import { CustomerSchema } from "../../schemas/Dashboard";
import { CustomerServices } from "../../services/Customer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const UseCustomer = () => {
  const [customers, setCustomers] = useState<Customer[] | []>([]);

  const getCustomers = async () => {
    const result = await CustomerServices.Get();
    setCustomers(result);
  };

  useEffect(() => {
    getCustomers();
  }, []);

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
            "Não foi possível adicionar cliente, verifique os dados e tente novamente"
          )
        )
  );

  const handleDeleteCustomer = async (id: string) =>
    await CustomerServices.Delete(id)
      .then(() => refresh(0))
      .catch(() =>
        console.log("Erro ao deletar cliente, verifique o id e tente novamente")
      );

  return {
    onSubmit,
    control,
    errors,
    isSubmitting,
    customers,
    handleDeleteCustomer,
  };
};
