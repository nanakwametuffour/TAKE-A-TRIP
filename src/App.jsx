import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
