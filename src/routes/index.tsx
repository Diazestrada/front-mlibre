import React from "react";
import { Route, Routes } from "react-router-dom";

// screnns

import HomeScreen from "../screens/App/Home";
import SearchScreen from "../screens/App/SearchResult";
import DetailsProductScreen from "../screens/App/DetailsProduct";
const Navigator = () => (
  <Routes>
    <Route path="/" element={<HomeScreen />} />
    <Route path="/items" element={<SearchScreen />} />
    <Route path="/items/:id" element={<DetailsProductScreen />} />
  </Routes>
);

export default Navigator;
