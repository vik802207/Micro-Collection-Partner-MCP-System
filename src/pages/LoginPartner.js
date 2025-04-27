import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPartner.css";

function LoginPartner() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://mcp-backend-9mv6.onrender.com/api/pickuppartner/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/dashboardpickuppartner");
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <div className="pp-login-container">
      <div className="pp-login-card">
        <h2>🚚 Pickup Partner Login</h2>
        <p className="pp-subtext">Enter your credentials to manage pickups.</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="📧 Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="🔒 Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button type="submit">Login ➜</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPartner;
