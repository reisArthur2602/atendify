import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Logo } from "../components/Logo";

export const SignLayout = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'column',
        gap: 4,
        height: "100vh",
      }}
    >
      <Logo />
      <Outlet />
    </Container>
  );
};
