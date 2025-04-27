import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "", role: "MCP" });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://mcp-backend-9mv6.onrender.com/api/auth/register", user);
      navigate("/login");
    } catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <div className="mcp-register-container">
      <div className="mcp-register-card">
        <h1>📝 MCP Signup</h1>
        <p className="subtext">Create your account to start managing pickups & funds</p>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="👤 Full Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="📧 Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="🔑 Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <select onChange={(e) => setUser({ ...user, role: e.target.value })}>
            <option value="MCP">MCP</option>
            <option value="PickupPartner">Pickup Partner</option>
          </select>
          <button type="submit">Register ➜</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
