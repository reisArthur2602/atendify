import { zodResolver } from "@hookform/resolvers/zod";
import { CategoryRequest } from "../../types/Category";
import { CategorySchema } from "../../schemas/Dashboard";
import { useForm } from "react-hook-form";

export const UseCategory = () => {
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

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return { onSubmit, control, errors, isSubmitting };
};
