import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Bookbinding from "./containers/Bookbinding";
import Entertainment from "./containers/Entertainment";
import Bobbleheads from "./containers/Bobbleheads";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Home />} />;
      <Route path="/bookbinding" element={<Bookbinding />} />;
      <Route path="/entertainment" element={<Entertainment />} />;
      <Route path="/bobbleheads" element={<Bobbleheads />} />;
    </Routes>
  );
}