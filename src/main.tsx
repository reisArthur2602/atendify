import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ThemeProvider } from "@mui/material";
import { theme } from "./providers/theme";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={Routes} />
    </ThemeProvider>
  </StrictMode>
);
