import { Box, Typography } from "@mui/material";
import { FormDialogCategory } from "../../components/Dashboard/Category/FormDialogCategory";
import { UseCategory } from "../../hooks/Dashboard/useCategory";

const Category = () => {
  const form = UseCategory();
  return (
    <Box padding={4}>
      <Box display={"flex"} justifyContent={"space-between"} marginBottom={6}>
        <Box>
          <Typography component={"h1"} variant="h4">
            Minhas Categorias
          </Typography>
          <Typography component={"p"} variant="body1">
            Gerencie as categoria do sistema
          </Typography>
        </Box>

        <FormDialogCategory {...form} />
      </Box>
      ...
    </Box>
  );
};

export default Category;
