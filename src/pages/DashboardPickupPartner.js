import { useEffect, useState } from "react";
import axios from "axios";
import "./DashboardPickupPartner.css";
import { useNavigate } from "react-router-dom";

function DashboardPickupPartner() {
  const [partner, setPartner] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/orderme/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPartner(res.data);
      } catch (err) {
        console.error("Error fetching pickup partner data", err);
      }
    };

    fetchData();
  }, []);
  const handleStatusChange = async (orderId, newStatus) => {
   
    try {
      const token = localStorage.getItem("token");
     
      await axios.patch(
        `http://localhost:8000/api/updatestatus/${orderId}/status`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Status updated!");
      const updatedOrders = partner.orders.map((order) =>
        order._id === orderId ? { ...order, OrderStatus: newStatus } : order
      );
      setPartner({ ...partner, orders: updatedOrders });
    } catch (err) {
      alert("Failed to update status");
      console.error(err);
    }
  };
  
  if (!partner) return <div>Loading dashboard...</div>;

  const orders = Array.isArray(partner.orders) ? partner.orders : [];
  const completed = orders.filter((o) => o.OrderStatus === "completed").length;
  const pending = orders.length - completed;

  return (
    <div className="pickup-dashboard">
      <h2>Welcome, {partner.name}</h2>

      <div className="stats-box">
        <div className="card wallet">Wallet: ₹{partner.walletBalance || 0}</div>
        <div className="card status">
          Status:{" "}
          <span className={`badge ${partner.status}`}>{partner.status}</span>
        </div>
        <div className="card">Total Orders: {orders.length}</div>
        <div className="card">Completed: {completed}</div>
        <div className="card">Pending: {pending}</div>
        <button
          className="card transaction-btn"
          onClick={() => navigate("/transaction-history")}
        >
          🧾 Transaction History
        </button>
      </div>

      <h3>Order History</h3>
      <table className="order-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
            <th>Payment per Order</th>
            <th>Total Orders</th>
            <th>Status</th>
            <th>Order Date</th>
            <th>Order Time</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="8" style={{ textAlign: "center", padding: "1rem" }}>
                No orders available.
              </td>
            </tr>
          ) : (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{order.name || "-"}</td>
                <td>{order.role || "-"}</td>
                <td>₹{order.Rateperorder || 0}</td>
                <td>{order.TotalOrder || 0}</td>
                <td>
                <select
                  value={order.OrderStatus}
                  onChange={(e) => handleStatusChange(order._id, e.target.value)}
                  className={`fancy-dropdown ${order.OrderStatus}`}
                >
                  <option value="pending">⏳ Pending</option>
                  <option value="in-progress">🚚 In Progress</option>
                  <option value="completed">✅ Completed</option>
                </select>
              </td>
              
                <td>
                  {order.OrderDate
                    ? new Date(order.OrderDate).toLocaleDateString()
                    : "-"}
                </td>
                <td>{order.OrderTime || "-"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardPickupPartner;
