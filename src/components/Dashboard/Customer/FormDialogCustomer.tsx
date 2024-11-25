import {
  Box,
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
import { UseCustomer } from "../../../hooks/Dashboard/useCustomer";

type FormDialogCustomerProps = Omit<
  ReturnType<typeof UseCustomer>,
  "handleDeleteCustomer" | "customers"
>;

export const FormDialogCustomer = ({
  control,
  errors,
  isSubmitting,
  onSubmit,
}: FormDialogCustomerProps) => {
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
        Adicionar Cliente
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: onSubmit,
        }}
      >
        <DialogTitle>Cadastrar Cliente</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Preencha o formulário para cadastrar cliente
          </DialogContentText>

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={4}
            marginBlock={4}
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Nome do cliente"
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

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Email do cliente"
                  label="Email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  disabled={isSubmitting}
                  variant="standard"
                  margin="dense"
                  fullWidth
                  size="small"
                />
              )}
            />
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Endereço do cliente"
                  label="Endereço"
                  error={!!errors.address}
                  helperText={errors.address?.message}
                  disabled={isSubmitting}
                  variant="standard"
                  margin="dense"
                  fullWidth
                  size="small"
                />
              )}
            />

            <Controller
              name="cpf"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="xxx.xxx.xxx-xx"
                  label="CPF"
                  error={!!errors.cpf}
                  helperText={errors.cpf?.message}
                  disabled={isSubmitting}
                  variant="standard"
                  margin="dense"
                  fullWidth
                  size="small"
                  type="tel"
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="(xx) xxxxx-xxxx"
                  label="Telefone"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  disabled={isSubmitting}
                  variant="standard"
                  margin="dense"
                  fullWidth
                  size="small"
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
