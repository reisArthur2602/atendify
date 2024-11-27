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
import { Order } from "../../../types/Order";
import { FinishOrderDialog } from "./FinishOrderDialog";

type DetailsOrderDialogProps = {
  order: Order;
  onFinish: (id: string) => Promise<void>;
};

export const DetailsOrderDialog = ({
  order,
  onFinish,
}: DetailsOrderDialogProps) => {
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
        <DialogTitle id="alert-dialog-title">Detalhes do chamado</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Visualize todos os detalhes do chamado
          </DialogContentText>

          {/* id */}
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
              {order.id}
            </Typography>
          </Box>

          {/* status */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBlock: 3,
            }}
          >
            <Typography component={"p"} variant="body2">
              Status:
            </Typography>

            <Typography component={"p"} variant="body2" color={grey[900]}>
              {formatUtils.Status(order.status)}
            </Typography>
          </Box>

          {/* customer */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBlock: 3,
            }}
          >
            <Typography component={"p"} variant="body2">
              Cliente:
            </Typography>

            <Typography component={"p"} variant="body2" color={grey[900]}>
              {formatUtils.Capitalize(order.client.name)}
            </Typography>
          </Box>

          {/* category */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBlock: 3,
            }}
          >
            <Typography component={"p"} variant="body2">
              Categoria:
            </Typography>

            <Typography component={"p"} variant="body2" color={grey[900]}>
              {formatUtils.Capitalize(order.category.name)}
            </Typography>
          </Box>

          {/* created_by */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBlock: 3,
            }}
          >
            <Typography component={"p"} variant="body2">
              Criado por:
            </Typography>

            <Typography component={"p"} variant="body2" color={grey[900]}>
              {formatUtils.Capitalize(order.user.username)}
            </Typography>
          </Box>

          {/* created_at */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBlock: 3,
            }}
          >
            <Typography component={"p"} variant="body2">
              Aberto:
            </Typography>

            <Typography component={"p"} variant="body2" color={grey[900]}>
              {formatUtils.DateToDDMMYYYY(new Date(order.created_at))}
            </Typography>
          </Box>

          {/* description */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBlock: 3,
            }}
          >
            <Typography component={"p"} variant="body2">
              Descrição:
            </Typography>

            <Typography component={"p"} variant="body2" color={grey[900]}>
              {order.description}
            </Typography>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
          {!order.status && (
            <FinishOrderDialog onFinish={() => onFinish(order.id)} />
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};
