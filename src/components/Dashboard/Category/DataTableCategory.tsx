import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Typography,
} from "@mui/material";
import { Category } from "../../../types/Category";
import { DeleteCategoryDialog } from "./DeleteCategoryDialog";
import { DetailsCategoryDialog } from "./DetailsCategoryDialog";
import { formatUtils } from "../../../utils/format";

type DataTableCategory = {
  categories: Category[] | [];
  onDelete: (id: string) => Promise<void>;
};

export const DataTableCategory = ({
  categories,
  onDelete,
}: DataTableCategory) => {
  const hasCategories = categories.length > 0;

  return (
    <Table>
      <TableHead>
        
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Nome</TableCell>
          <TableCell>Cadastro</TableCell>
        </TableRow>

      </TableHead>

      <TableBody>
        {hasCategories ? (
          categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.id}</TableCell>
              <TableCell>{category.name}</TableCell>
              <TableCell>
                {formatUtils.DateToDDMMYYYY(new Date(category.created_at))}
              </TableCell>
              <TableCell>
                <Box display={"flex"} gap={2}>
                  <DeleteCategoryDialog
                    onDelete={() => onDelete(category.id)}
                  />
                  <DetailsCategoryDialog category={category} />
                </Box>
              </TableCell>
            </TableRow>
          ))
        ) : (
          // Exibe uma mensagem caso não existam dados
          <TableRow>
            <TableCell colSpan={3} align="center">
              <Box p={2}>
                <Typography>Nenhuma categoria foi encontrada</Typography>
              </Box>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
