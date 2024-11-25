import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CustomerRequest } from "../../types/Customer";
import { CustomerSchema } from "../../schemas/Dashboard";

export const UseCustomer = () => {
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

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return {
    onSubmit,
    control,
    errors,
    isSubmitting,
  };
};
