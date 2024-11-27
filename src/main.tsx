import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { theme } from "./providers/theme";
import { BrowserRouter } from "react-router-dom";

import MainRoutes from "./routes";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ToastContainer  />
        <MainRoutes />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
