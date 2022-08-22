import React from "react";
import { Route, Routes } from "react-router-dom";

// screnns

import HomeScreen from "../screens/App/Home/index";

const Navigator = () => (
  <Routes>
    <Route path="/" element={<HomeScreen />} />
  </Routes>
);

export default Navigator;
