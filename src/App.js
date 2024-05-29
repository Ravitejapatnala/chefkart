import React from "react";
import SelectDishes from "./Pages/SelectDishes";
import { Route, Routes } from "react-router-dom";
import DishDetails from "./Pages/DishDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SelectDishes/>}></Route>
      <Route path="/details" element={<DishDetails/>}></Route>
    </Routes>
  );
}

export default App;