import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RegisterPartner.css";

function RegisterPartner() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/pickuppartner/register", form);
      alert("Registered successfully! Please login.");
      navigate("/loginpartner");
    } catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <div className="partner-register-container">
      <div className="partner-register-card">
        <h2>🚀 Join as a Pickup Partner</h2>
        <p className="subtext">Create your account to start collecting orders efficiently.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="👤 Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
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
          <button type="submit">Register ➜</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPartner;
