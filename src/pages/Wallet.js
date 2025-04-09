import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Wallet.css"
import Payment from "./Payment.js"
import {  useNavigate } from "react-router-dom";
const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const[mobile, setMobile] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/api/wallet/balance", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setBalance(res.data.walletBalance))
      .catch((err) => console.log(err));
  }, []);

  const handlePaymentSuccess = async (response) => {
    const token = localStorage.getItem("token");
    try{await axios.post(
      "http://localhost:8000/api/wallet/add-funds",
      { amount: parseInt(amount), paymentId: response.razorpay_payment_id, },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    setBalance(balance + parseInt(amount));
    setShowPayment(false); 
    alert("Funds added successfully!");
    navigate("/dashboard");
  
  }
    catch(err){console.log(err)}
   
  }
  const handleAddFunds = () => {
    if (parseInt(amount) > 0) {
      setShowPayment(true);
    } else {
      alert("Enter a valid amount");
    }
  };


  const handleSuccess = (response) => {
    console.log("Payment Success:", response);
    setShowPayment(false);

    // Optionally, update balance here if needed
    // Then navigate to dashboard
    navigate("/dashboard"); // 👈 Redirect
  };

  return (
    <div>
    <div className="wallet-section">
  <h2>Wallet</h2>
  <p className="wallet-balance">Balance: ₹{balance}</p>

  <input
    type="number"
    placeholder="Enter Amount"
    onChange={(e) => setAmount(e.target.value)}
  />

  <input
    type="tel"
    placeholder="Enter Mobile Number"
    className="wallet-mobile"
    onChange={(e) => setMobile(e.target.value)}
  />

  <button onClick={handleAddFunds}>Add Funds</button>
    {showPayment && (
      <Payment
        amount={parseInt(amount)}
        mobile={mobile}
        onSuccess={handlePaymentSuccess}
        onClose={() => setShowPayment(false)}
      />
    )}
  </div>
  
    </div>
  );
};

export default Wallet;
