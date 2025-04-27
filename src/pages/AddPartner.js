import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./RegisterForm.css"

function AddPartner() {
  const [user, setUser] = useState({ name: "",email:"", status: "active" });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) return navigate("/");

    try {
          await axios.post(
        "https://mcp-backend-9mv6.onrender.com/api/pickup/addPartner",
        {
          name: user.name,
          email: user.email,
          status: user.status,
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      alert("Partner Registered!");
      setUser({ name: "",email:"", status: "active" }); // Reset form
      navigate("/dashboard"); // Redirect to dashboard after successful registration
    } catch (err) {
      alert("Already registered partner");
      console.error(err);
    }
  };

  return (
    <div className="fancy-container">
    <div className="fancy-card">
      <h2 className="fancy-title">🚚 Register as Pickup Partner</h2>
      <form className="fancy-form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />
        <input
        type="text"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
        <select
          value={user.status}
          onChange={(e) => setUser({ ...user, status: e.target.value })}
        >
          <option value="active">✅ Active</option>
          <option value="inactive">❌ Inactive</option>
        </select>
        <button type="submit">✨ Register Now</button>
      </form>
    </div>
  </div>
  );
}

export default AddPartner;
