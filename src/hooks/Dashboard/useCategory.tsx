import { zodResolver } from "@hookform/resolvers/zod";
import { Category, CategoryRequest } from "../../types/Category";
import { CategorySchema } from "../../schemas/Dashboard";
import { useForm } from "react-hook-form";
import { CategoryServices } from "../../services/Category";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const UseCategory = () => {
  const [categories, setCategories] = useState<Category[] | []>([]);

  const getCategories = async () => {
    const result = await CategoryServices.Get();
    setCategories(result);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const refresh = useNavigate();

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
        .then(() => {
          console.log("A categoria foi cadastrada com sucesso"!);
          refresh(0);
        })
        .catch(() =>
          console.error(
            "Não foi possível adicionar a categoria, verifique os dados e tente novamente"
          )
        )
  );

  const handleDeleteCategory = async (id: string) =>
    await CategoryServices.Delete(id)
      .then(() => refresh(0))
      .catch(() =>
        console.log(
          "Erro ao deletar categoria, verifique o id e tente novamente"
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
