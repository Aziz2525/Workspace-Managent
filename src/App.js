import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/auth/Login";
import { Provider as ReduxProvider, useSelector } from "react-redux";
import Home from "./screens/main/Home";
import Products from "./screens/main/Products";
export default function App() {
  const user = useSelector((state) => state.loginReducer.isLogin);
  console.log(user)
  return (
    <BrowserRouter>
      <Routes>

        {
          user ? <><Route path="/" element={<Home />}>
          </Route> <Route path="/products" element={<Products />}>
            </Route></> :
            <Route path="/" element={<Login />}>
            </Route>
        }

      </Routes>
    </BrowserRouter>
  );
}
