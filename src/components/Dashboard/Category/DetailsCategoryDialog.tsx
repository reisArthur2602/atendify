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
import { Category } from "../../../types/Category";
import { grey } from "@mui/material/colors";
import { formatUtils } from "../../../utils/format";

type DetailsCategoryDialog = {
  category: Category;
};

export const DetailsCategoryDialog = ({ category }: DetailsCategoryDialog) => {
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
        <DialogTitle id="alert-dialog-title">Detalhes da Categoria</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Visualize todos os detalhes da categoria
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
              {category.id}
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
              Nome:
            </Typography>

            <Typography component={"p"} variant="body2" color={grey[900]}>
              {category.name}
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
              {formatUtils.DateToDDMMYYYY(new Date(category.created_at))}
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
