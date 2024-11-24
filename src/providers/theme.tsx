import { createTheme } from "@mui/material/styles";
import { grey, teal } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: teal[600],
    },
    secondary: {
      main: teal[800],
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
      color: grey[900],
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: grey[900],
    },

    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      color: grey[900],
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 600,
      color: grey[900],
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      color: grey[600],
    },

    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.43,
      color: grey[600],
    },

    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "uppercase",
    },
  },
});
