import { createTheme } from "@mui/material/styles";

// Custom theme untuk tampilan yang lebih menarik
export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      dark: "#115293",
    },
    secondary: {
      main: "#4caf50",
    },
    background: {
      default: "#f5f7fa",
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontWeight: 600,
        },
      },
    },
  },
});