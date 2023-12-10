import React from "react";
import Header from "../Component/Header";
import { Box, Typography } from "@mui/material";
import LandingPageCard from "../Component/LandingPageCard";
import RecomendedProduct from "../Component/RecomendedProduct";
import Title from "../Component/Title";
import Categories from "../Component/Categories";
import Footer from "../Component/Footer";

const HomePage = () => {
  return (
    <>
      <Header />

      <Title titleName={"Our Product"}/>

      <RecomendedProduct />

      {/* <Title titleName={"Available Category"}/> */}

      {/* <Categories /> */}
      
      <Footer />
    </>
  );
};

export default HomePage;
