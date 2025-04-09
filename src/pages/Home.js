import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>🚛 EpiCircle System</h1>
        <p className="subtitle">Manage pickups, partners & payments – simplified.</p>

        <div className="role-section">
          <div className="role-card">
            <h2>MCP</h2>
            <button onClick={() => navigate("/login")}>Login as MCP</button>
            <button onClick={() => navigate("/register")}>Register as MCP</button>
          </div>

          <div className="role-card">
            <h2>Pickup Partner</h2>
            <button onClick={() => navigate("/loginpartner")}>Login as Partner</button>
            <button onClick={() => navigate("/registerpartner")}>Register as Partner</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
