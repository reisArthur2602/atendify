import { zodResolver } from "@hookform/resolvers/zod";
import { Category, CategoryRequest } from "../../types/Category";
import { CategorySchema } from "../../schemas/Dashboard";
import { useForm } from "react-hook-form";
import { CategoryServices } from "../../services/Category";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const UseCategory = () => {
  const [categories, setCategories] = useState<Category[] | []>([]);

  const getCategories = async () => {
    const result = await CategoryServices.Get();
    setCategories(result);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleDeleteCategory = async (id: string) =>
    await CategoryServices.Delete(id)
      .then(async () => await getCategories())
      .catch(() =>
        toast.error(
          "Erro ao deletar categoria, verifique o id e tente novamente"
        )
      );

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<CategoryRequest>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = handleSubmit(
    async (data) =>
      await CategoryServices.Create(data)
        .then(async () => {
          toast.success("A categoria foi cadastrada com sucesso!");
          await getCategories();
        })
        .catch(() =>
          toast.error(
            "Não foi possível adicionar a categoria, verifique os dados e tente novamente"
          )
        )
  );

  return {
    onSubmit,
    control,
    errors,
    isSubmitting,
    categories,
    handleDeleteCategory,
  };
};
