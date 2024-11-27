import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Order, OrderRequest } from "../../types/Order";
import { OrderSchema } from "../../schemas/Dashboard";
import { useEffect, useState } from "react";
import { OrderServices } from "../../services/Order";
import { toast } from "react-toastify";

export const UseOrder = () => {
  const [orders, setOrders] = useState<Order[] | []>([]);

  const getOrders = async () => {
    const result = await OrderServices.Get();
    setOrders(result);
  };

  useEffect(() => {
    getOrders();
  }, []);

  const handleDeleteOrder = async (id: string) =>
    await OrderServices.Delete(id)
      .then(async () => await getOrders())
      .catch(() =>
        console.log("Erro ao deletar chamado, verifique o id e tente novamente")
      );

  const handleFinishOrder = async (id: string) =>
    await OrderServices.Finish(id)
      .then(async () => await getOrders())
      .catch(() =>
        console.log(
          "Erro ao finalizar chamado, verifique o id e tente novamente"
        )
      );

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<OrderRequest>({
    resolver: zodResolver(OrderSchema),
    defaultValues: {
      category_id: "",
      clientId: "",
      description: "",
    },
  });

  const onSubmit = handleSubmit(
    async (data) =>
      await OrderServices.Create(data)
        .then(async () => {
          await getOrders();
          reset();
          toast.success("Chamado foi aberto com sucesso!");
        })
        .catch(() =>
          toast.error(
            "Não foi possível abrir o chamado, verifique os dados e tente novamente"
          )
        )
  );

  return {
    control,
    errors,
    isSubmitting,
    orders,
    onSubmit,
    handleDeleteOrder,
    handleFinishOrder,
  };
};
