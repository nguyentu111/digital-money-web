import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DepositMoney from "./components/DepositMoney";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deposit" element={<DepositMoney />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
