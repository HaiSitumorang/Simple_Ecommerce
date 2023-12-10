import { Box, Typography } from "@mui/material";
import React from "react";

const LandingPageCard = ({HeaderText, Description}) => {
  return (
    <Box 
      sx={{
        width:"33%",
        padding:"16px",
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center",
        gap:"31px",
        flexGrow:"1"
      }}
    >
      <Typography
        color="primary"
        sx={{
          fontSize: "48px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
        }}
      >
        {HeaderText}
      </Typography>

      <Typography
        sx={{
          color: "#333",
          textAlign: "center",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
        }}
      >
        {Description}
      </Typography>
    </Box>
  );
};

export default LandingPageCard;
