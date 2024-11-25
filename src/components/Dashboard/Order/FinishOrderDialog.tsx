import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useState } from "react";

type FinishOrderDialogProps = {
  onFinish: () => Promise<void>;
};

export const FinishOrderDialog = ({ onFinish }: FinishOrderDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Finalizar
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Deseja finalizar o chamado
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Esta ação não poderá ser desfeita, o status do chamado será alterado
            em nosso banco de dados
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={onFinish}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
