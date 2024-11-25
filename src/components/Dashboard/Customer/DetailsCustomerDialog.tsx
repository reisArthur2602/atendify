import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";

import AttachFileIcon from "@mui/icons-material/AttachFile";

import { grey } from "@mui/material/colors";
import { formatUtils } from "../../../utils/format";
import { Customer } from "../../../types/Customer";

type DetailsCustomerDialogProps = {
  customer: Customer;
};

export const DetailsCustomerDialog = ({
  customer,
}: DetailsCustomerDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton aria-label="details" onClick={handleClickOpen}>
        <AttachFileIcon />
      </IconButton>

      <Dialog
        maxWidth="sm"
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Detalhes do cliente</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Visualize todos os detalhes do cliente
          </DialogContentText>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBlock: 3,
            }}
          >
            <Typography component={"p"} variant="body2">
              Id:
            </Typography>

            <Typography component={"p"} variant="body2" color={grey[900]}>
              {customer.id}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBlock: 3,
            }}
          >
            <Typography component={"p"} variant="body2">
              Email:
            </Typography>

            <Typography component={"p"} variant="body2" color={grey[900]}>
              {customer.email}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBlock: 3,
            }}
          >
            <Typography component={"p"} variant="body2">
              Telefone:
            </Typography>

            <Typography component={"p"} variant="body2" color={grey[900]}>
              {formatUtils.Phone(customer.phone)}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBlock: 3,
            }}
          >
            <Typography component={"p"} variant="body2">
              CPF:
            </Typography>

            <Typography component={"p"} variant="body2" color={grey[900]}>
              {formatUtils.CPF(customer.cpf)}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBlock: 3,
            }}
          >
            <Typography component={"p"} variant="body2">
              Endereço:
            </Typography>

            <Typography component={"p"} variant="body2" color={grey[900]}>
              {customer.address}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBlock: 3,
            }}
          >
            <Typography component={"p"} variant="body2">
              Cadastro:
            </Typography>

            <Typography component={"p"} variant="body2" color={grey[900]}>
              {formatUtils.DateToDDMMYYYY(new Date(customer.created_at))}
            </Typography>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
