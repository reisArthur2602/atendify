import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ThemeProvider } from "@mui/material";
import { theme } from "./providers/theme";
import { BrowserRouter } from "react-router-dom";

import MainRoutes from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRoutes />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
