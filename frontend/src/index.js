import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./Utils/theme";
import RoutesConfig from "./RoutesConfig";
// import { AuthProvider } from "./context/AuthContext";
// import { DataProvider } from "./context/DataContext";
// import { CheckoutProvider } from "./context/CheckoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {/* <AuthProvider>
      <DataProvider>
        <CheckoutProvider> */}
            <RoutesConfig />
        {/* </CheckoutProvider>
      </DataProvider>
    </AuthProvider> */}
  </ThemeProvider>
);
