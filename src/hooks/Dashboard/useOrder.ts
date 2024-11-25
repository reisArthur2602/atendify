import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { OrderRequest } from "../../types/Order";
import { OrderSchema } from "../../schemas/Dashboard";

export const UseOrder = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<OrderRequest>({
    resolver: zodResolver(OrderSchema),
    defaultValues: {
      category_id: "",
      clientId: "",
      description: "",
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
