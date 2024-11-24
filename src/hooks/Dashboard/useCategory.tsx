import { zodResolver } from "@hookform/resolvers/zod";
import { CategoryRequest } from "../../types/Category";
import { CategorySchema } from "../../schemas/Dashboard";
import { useForm } from "react-hook-form";
import { CategoryServices } from "../../services/Category";
import { useNavigate } from "react-router-dom";

export const UseCategory = () => {
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

  return { onSubmit, control, errors, isSubmitting };
};
