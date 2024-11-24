import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { UseCategory } from "../../../hooks/Dashboard/useCategory";

type FormDialogCategoryProps = ReturnType<typeof UseCategory>;

export const FormDialogCategory = ({
  control,
  errors,
  isSubmitting,
  onSubmit,
}: FormDialogCategoryProps) => {
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
        Adicionar categoria
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: onSubmit,
        }}
      >
        <DialogTitle>Cadastrar Categoria</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha o formulário para cadastrar categoria
          </DialogContentText>

          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                autoFocus
                placeholder="Digite um nome"
                label="Nome"
                error={!!errors.name}
                helperText={errors.name?.message}
                disabled={isSubmitting}
                variant="standard"
                margin="dense"
                fullWidth
                size="small"
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={isSubmitting}>
            Cancelar
          </Button>
          <Button type="submit">Adicionar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
