import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DepositMoney from "./pages/DepositMoney";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import WithDrawMoney from "./pages/WithDrawMoney";
import TransferMoney from "./pages/TransferMoney";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deposit" element={<DepositMoney />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/withdraw" element={<WithDrawMoney />} />
        <Route path="/transfer" element={<TransferMoney />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
