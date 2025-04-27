import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css"

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) return navigate("/login");

    axios
      .get("https://mcp-backend-9mv6.onrender.com/api/user/profile", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setUser(res.data))
      .catch(() =>{
        alert("Error");
        navigate("/");
      });
  }, [navigate]);

  return (
    <div>
     <div className="welcome-section">
  <h2>Welcome {user?.name}</h2>
  <p>Role: {user?.role}</p>
  <button onClick={() => navigate("/wallet")}>Wallet</button>
</div>

      <div className="dashboard-wrapper">
      <h1 className="dashboard-title">MCP Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <div>
            <h4>Wallet Balance</h4>
            <p className="value green">₹{user?.walletBalance}</p>
          </div>
          <div className="icon-placeholder">👜</div>
        </div>

        <div className="stat-card">
          <div>
            <h4>Pickup Partners</h4>
            <p className="value blue">{user?.pickupPartners.length}</p>
          </div>
          <div className="icon-placeholder">👥</div>
        </div>

        <div className="stat-card">
          <div>
            <h4>Completed Orders</h4>
            <p className="value purple">{10}</p>
          </div>
          <div className="icon-placeholder">✅</div>
        </div>

        <div className="stat-card">
          <div>
            <h4>Pending Orders</h4>
            <p className="value yellow">{5}</p>
          </div>
          <div className="icon-placeholder">⏳</div>
        </div>
      </div>

      <div className="dashboard-container">
      <div className="section-card">
        <h2>Pickup Partner Management</h2>
        <button className="btn-primary" onClick={() => navigate("/addPartner")}>➕ Add PickUp Partner</button>
        <p>Manage your delivery force. Assign roles, set commissions, and handle wallets.</p>
      </div>
    
      <div className="section-card">
        <h2>Order Management</h2>
        <button className="btn-primary" onClick={() => navigate("/fetchallPartner")}>👥 See PickUp Partner</button>
        <p>Track and assign pickup orders in real-time. View pending, in-progress, and completed deliveries.</p>
      </div>
    
      <div className="section-card">
      <h2>Transaction Management</h2>
      <button
      className="btn-secondary"
      style={{ marginTop: "10px" }}
      onClick={() => navigate("/transaction-history-Mcp")}
    >
      📜 See Transaction History
    </button>
    <p>
      Track and assign pickup orders in real-time. View pending, in-progress,
      and completed deliveries.
    </p>
      </div>
    
      <div className="section-card">
        <h2>Reports & Analytics</h2>
        <p>Visualize performance, download insights, and optimize operations with smart reports.</p>
      </div>
    </div>
</div >

</div>
  );
};

export default Dashboard;
