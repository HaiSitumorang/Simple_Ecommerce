import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const base = createTheme({
  palette: {
    primary: {
      main: "#226957",
    },
    secondary: {
      main: "#EA9E1F",
    },
    white: {
      main: "#FFFFFF",
    },
    red: {
      main: "#EB5757",
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
        head: {
          backgroundColor: "#226957",
          color: "#ffffff",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(even)": {
            backgroundColor: "#EA9E1F33",
          },
          "&:last-child td, &:last-child th": {
            border: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "20px",
        },
        contained: {
          color: "#FFFFFF",
          borderRadius: "8px",
          padding: { xs: "10px 10px", md: "10px 20px" },
        },
      },
    },
  },
});

const theme = responsiveFontSizes(base);

export default theme;
