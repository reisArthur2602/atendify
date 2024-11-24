import { Box, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";

export const Logo = () => {
  return (
    <Box component="div" display={"flex"} alignItems={"center"}>
      <Typography
        component={"h2"}
        variant="h6"
        fontWeight={"bold"}
        color={teal[400]}
      >
        Atendify
      </Typography>
      <img src="/logo.svg" alt="logo Atendify" />
    </Box>
  );
};
