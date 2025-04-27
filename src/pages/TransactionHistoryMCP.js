import { useEffect, useState } from "react";
import axios from "axios";
import "./TransactionHistory.css";

function TransactionHistoryMCP() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("https://mcp-backend-9mv6.onrender.com/api/transactions/fundaddsmcp", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="transaction-history">
      <h2>Fund Transfer History</h2>
      <table className="txn-table">
        <thead>
          <tr>
            <th>To 🏦</th>
            <th>Amount 💸</th>
            <th>Date</th>
             <th>Transcation Id ✅</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn._id}>
              <td>{txn.to?.name || "Unknown Partner"}</td>
              <td>₹{txn.amount}</td>
              <td>{new Date(txn.date).toLocaleString()}</td>
              <td className="txn-id">{txn._id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistoryMCP;
