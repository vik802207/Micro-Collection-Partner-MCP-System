import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Fetchallpartner.css";
function FetchallPatner() {
  const [partners, setPartners] = useState([]);
  const [run, setRun] = useState(0);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentInput, setPaymentInput] = useState("");
  const [statusInput, setStatusInput] = useState("");
  const [roleInput, setRoleInput] = useState("");
  const [idmcp, setIdmcp] = useState(""); 
  const [totalOrderInput, setTotalOrderInput] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return navigate("/dashboard");
    axios
      .get("https://mcp-backend-9mv6.onrender.com/api/fetch/fetchallpartner", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) =>{ 
        const { partners, mcpId } = res.data;
        setPartners(Array.isArray(partners) ? partners : []);
        setIdmcp(mcpId); // <- you already have this in your state!
      })
      .catch((err) => {
        console.error(err);
        alert("Error fetching partners");
      });
  }, [run]);
  const handleAddFund = async (partnerId, amount) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `https://mcp-backend-9mv6.onrender.com/api/addfundstopickuppartner/add/${partnerId}`,
        { amount },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Fund added successfully!");
      setRun(run + 1); // refresh partner list
    } catch (err) {
      console.error(err);
      alert("Failed to add fund.");
    }
  };
  
  
  const handleDelete = async (partnerId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this partner?"
    );
    if (!confirmDelete) return;
    console.log(partnerId);

    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://mcp-backend-9mv6.onrender.com/api/deletemcppatner/delete/${partnerId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Partner deleted successfully!");
      setRun(run + 1);
      // fetchPartners(); // Refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to delete partner");
    }
  };
  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `https://mcp-backend-9mv6.onrender.com/api/orderbymcp/add/${selectedPartner}`,
        {
         paymentInput:paymentInput,
         role:roleInput,
         TotalOrder:totalOrderInput
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setModalVisible(false);
      window.location.reload(); // or refetch partners
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div className="mcp-dashboard">
      <h2 className="dashboard-heading">Mapped Pickup Partners</h2>

      {partners.length === 0 ? (
        <p className="no-data">No pickup partners mapped yet.</p>
      ) : (
        <div className="table-wrapper">
          <table className="fancy-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Total Add Funds</th>
                <th>Total Orders</th>
                <th>Order Status</th>
                <th>Add Funds</th>
                <th>Place Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((p) => {
                let totalOrder;
                let orderstatus;
                
                for(let i=0;i<p.orders.length;i++){
                  if(p.orders[i].OrderId === idmcp){
                    totalOrder = p.orders[i].TotalOrder;
                    orderstatus=p.orders[i].OrderStatus;
                    
                  }
                 
                }
                return (
                  <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>
                      <span
                        className={`status-badge ${
                          p.status === "active" ? "active" : "inactive"
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td>₹{p.walletBalance}</td>

                    <td>{totalOrder}</td>
                    <td>{orderstatus}</td>
                    <td>
                    <button
                      className="fund-btn"
                      onClick={() => {
                        const amount = prompt("Enter amount to add:");
                        if (amount) handleAddFund(p._id, parseFloat(amount));
                      }}
                    >
                      💰 Add Fund
                    </button>
                  </td>
                  
                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => {
                          setSelectedPartner(p._id);
                          setPaymentInput(p.paymentPerOrder || 0);
                          setStatusInput(p.status || "active");
                          setRoleInput(p.role || "");
                          setTotalOrderInput(p.TotalOrder || 0);
                          setModalVisible(true);
                        }}
                      >
                        🧾 Order
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(p._id)}
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Update Partner Details</h3>
            <label>Payment per Order (₹)</label>
            <input
              type="number"
              value={paymentInput}
              onChange={(e) => setPaymentInput(e.target.value)}
            />
            <label>Role</label>
            <input
              type="text"
              value={roleInput}
              onChange={(e) => setRoleInput(e.target.value)}
            />

            <label>Total Orders</label>
            <input
              type="number"
              value={totalOrderInput}
              onChange={(e) => setTotalOrderInput(e.target.value)}
            />
            <label>Status</label>
            <select
              value={statusInput}
              onChange={(e) => setStatusInput(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <div className="modal-actions">
              <button className="save-btn" onClick={handleUpdate}>
                Save
              </button>
              <button
                className="cancel-btn"
                onClick={() => setModalVisible(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchallPatner;
