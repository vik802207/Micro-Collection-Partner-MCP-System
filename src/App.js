import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import AddPartner from "./pages/AddPartner";
import FetchAllPartner from "./pages/FetchallPartner"
import Payment from "./pages/Payment";
import DashboardPickupPartner from "./pages/DashboardPickupPartner";
import LoginPartner from "./pages/LoginPartner";
import RegisterPartner from "./pages/RegisterPartner";
import TransactionHistory from "./pages/TransactionHistory";
import TransactionHistoryMCP from "./pages/TransactionHistoryMCP";
import Home from "./pages/Home"

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/addPartner" element={<AddPartner/>} />
        <Route path="/fetchallPartner" element={<FetchAllPartner />} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/loginpartner" element={<LoginPartner/>}/>
        <Route path="/registerpartner" element={<RegisterPartner/>}/>
        <Route path="/dashboardpickuppartner" element={<DashboardPickupPartner/> }/>
        <Route path="transaction-history" element ={<TransactionHistory/>}/>
        <Route path="/transaction-history-Mcp" element={<TransactionHistoryMCP/>}/>
      </Routes>
    </Router>
  );
};

export default App;
