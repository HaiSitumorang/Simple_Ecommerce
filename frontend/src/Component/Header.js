import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="primary"
        sx={{
          padding: "8px 50px",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Link to="/home" style={{textDecoration:"none", color: "white"}}>
            <Typography variant="h6"sx={{ flexGrow: 1 }}>
              Simple E-Commerce
            </Typography>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
          >
            {/* <Button size="large" color="white">
              <PersonIcon />
            </Button> */}
            <Button component={Link} to="/invoice"color="white">Invoice</Button>
            <Button component={Link} to="/cart" size="large" color="white">
              <ShoppingCartIcon />
            </Button>
            {/* <Button size="large" color="white">
              <LogoutIcon />
            </Button> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
