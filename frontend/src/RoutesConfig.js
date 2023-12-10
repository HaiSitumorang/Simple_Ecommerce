import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import SuccessPayment from "./Pages/SuccessPayment";
import Invoice from "./Pages/Invoice";
import DetailInvoive from "./Pages/DetailInvoive";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/home" Component={HomePage}></Route>
        <Route index path="/category" Component={Category}></Route>
        <Route index path="/cart" Component={Cart}></Route>
        <Route index path="/product/:id" Component={Product}></Route>
        <Route index path="/successpayment" Component={SuccessPayment}></Route>
        <Route index path="/invoice" Component={Invoice}></Route>
        <Route index path="/invoice/:id" Component={DetailInvoive}></Route>
        <Route index path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
