import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { UseOrder } from "../../../hooks/Dashboard/useOrder";
import { Category } from "../../../types/Category";
import { Customer } from "../../../types/Customer";
import { formatUtils } from "../../../utils/format";

type FormDialogOrderProps = Omit<
  ReturnType<typeof UseOrder>,
  "handleDeleteOrder" | "orders" | "handleFinishOrder"
> & {
  categories: Category[] | [];
  customers: Customer[] | [];
};

export const FormDialogOrder = ({
  control,
  errors,
  isSubmitting,
  categories,
  customers,
  onSubmit,
}: FormDialogOrderProps) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        variant="text"
        onClick={handleClickOpen}
        size="medium"
        sx={{ height: "min-content" }}
      >
        Abrir Chamado
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: onSubmit,
        }}
      >
        <DialogTitle>Abrir Chamado</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha o formulário para abrir chamado
          </DialogContentText>

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={4}
            marginBlock={4}
          >
            <Controller
              name="clientId"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Selecione um cliente"
                  error={!!errors.clientId}
                  helperText={errors.clientId?.message}
                  fullWidth
                  disabled={isSubmitting}
                >
                  <MenuItem value="" disabled>
                    Selecione um cliente
                  </MenuItem>
                  {customers.map((customer) => (
                    <MenuItem key={customer.id} value={customer.id}>
                      {formatUtils.Capitalize(customer.name)}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

            <Controller
              name="category_id"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Selecione uma categoria"
                  error={!!errors.category_id}
                  helperText={errors.category_id?.message}
                  fullWidth
                  disabled={isSubmitting}
                >
                  <MenuItem value="" disabled>
                    Selecione uma categoria
                  </MenuItem>
                  {categories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {formatUtils.Capitalize(category.name)}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Descreva o seu problema..."
                  label="Descrição"
                  error={!!errors.description}
                  helperText={errors.description?.message}
                  disabled={isSubmitting}
                  variant="outlined"
                  multiline
                  rows={5}
                  fullWidth
                />
              )}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={isSubmitting}>
            Cancelar
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
