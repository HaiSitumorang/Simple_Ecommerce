import React from "react";
import Header from "../Component/Header";
import { Box, Typography } from "@mui/material";
import Title from "../Component/Title";

const Category = () => {
  return (
    <>
      <Header />

      <Box
        sx={{
          minHeight: "294px",
          backgroundImage: `url(https://res.cloudinary.com/dlnicxanf/image/upload/v1692679684/CookingCourse/Homepage/Rectangle_13_ldmgmk.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>

      <Box
        sx={{
          minHeight: "251px",
          border: "1px solid #E0E0E0",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          justifyContent: "center",
          p: "46px 70px",
        }}
      >
        <Typography variant="h5" color={"#333333"}>English</Typography>
        <Typography
          sx={{
            color: "#333",
            textAlign: "justify",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>

      <Title titleName={"Our Product List"}></Title>
    </>
  );
};

export default Category;
