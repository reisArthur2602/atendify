import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";

import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";

type DeleteOrderDialogProps = {
  onDelete: () => Promise<void>;
};

export const DeleteOrderDialog = ({ onDelete }: DeleteOrderDialogProps) => {
    
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Deseja excluir o chamado
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Esta ação não poderá ser desfeita, o chamado será removida de nosso
            banco de dados
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={onDelete}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
