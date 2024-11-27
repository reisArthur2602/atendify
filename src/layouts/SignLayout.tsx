import { Container, LinearProgress } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

export const SignLayout = () => {
  const { handleInitAuthUser, loading } = useAuth();

  useEffect(() => {
    (async () => await handleInitAuthUser())();
  }, []);

  if (loading) return <LinearProgress style={{ height: 10 }} />;

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
        height: "100vh",
      }}
    >
      <Logo />
      <Outlet />
    </Container>
  );
};
