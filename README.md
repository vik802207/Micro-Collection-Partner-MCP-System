# 🚛 Micro Collection Partner (MCP) System

A full-stack web application that manages and tracks logistics activities for **Micro Collection Partners (MCPs)** and their associated **Pickup Partners**. Designed to streamline order allocation, fund transfers, and real-time tracking.

---

## 📦 Features

### 🧑‍💼 MCP Dashboard
- View wallet balance
- Fund transfers to Pickup Partners
- Add, view, and manage Pickup Partners
- Track order status (Pending, In-progress, Completed)
- Full transaction history

### 👷 Pickup Partner Dashboard
- Login and view assigned orders
- Change order status in real-time
- Wallet view for received funds
- View transaction history

### 🔐 Authentication & Authorization
- Role-based login: MCP & Pickup Partner
- Secure JWT-based auth
- Protected routes

---

## 🛠 Tech Stack

### Frontend
- **React.js**
- **React Router**
- **Axios**
- **Tailwind CSS / Custom CSS**

### Backend
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **JWT Authentication**

---

## 🚀 Getting Started

### 1. Clone the repo

git clone https://github.com/vik802207/Micro-Collection-Partner-MCP-System.git
cd Micro-Collection-Partner-MCP-System
## 📁 Folder Structure

### Frontend (`src/`)

src/
├── components/                    # Reusable components (if any)
└── pages/                         # Main views and styles
    ├── AddPartner.js              # Form to add Pickup Partner
    ├── AuthPickup.css             # Shared authentication styles
    ├── Dashboard.js               # MCP dashboard view
    ├── Dashboard.css
    ├── DashboardPickupPartner.js  # Pickup Partner dashboard view
    ├── DashboardPickupPartner.css
    ├── FetchallPartner.js         # View to list all Pickup Partners
    ├── FetchallPartner.css
    ├── Home.js                    # Home / Landing page
    ├── Home.css
    ├── Login.js                   # MCP login page
    ├── Login.css
    ├── LoginPartner.js            # Pickup Partner login page
    ├── LoginPartner.css
    ├── Payment.js                 # Payment / Fund Transfer page
    ├── Register.js                # MCP registration page
    ├── Register.css
    ├── RegisterForm.css           # Common styles for registration
    ├── RegisterPartner.js         # Pickup Partner registration
    ├── RegisterPartner.css
    ├── TransactionHistory.js      # Transaction history table
    ├── TransactionHistory.css
### 📸 UI Highlights
Clean dashboards for both roles

Responsive design for mobile

Beautiful and minimal login/signup forms
## 📸 Screenshots
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%20(343).png?raw=true)
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%20(344).png?raw=true)
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%20(345).png?raw=true)
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%20(346).png?raw=true)
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%20(347).png?raw=true)
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%20(348).png?raw=true)
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%20(349).png?raw=true)
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%20(350).png?raw=true)
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%20(351).png?raw=true)
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%20(352).png?raw=true)
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%20(353).png?raw=true)
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%20(354).png?raw=true)
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%20(355).png?raw=true)
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%20(357).png?raw=true)
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%20(358).png?raw=true)
## Database
![Alt text](https://github.com/vik802207/Micro-Collection-Partner-MCP-System/blob/main/img/Screenshot%202025-04-10%20011148.png?raw=true)
## 🤝 Contributing
PRs are welcome! For major changes, please open an issue first to discuss what you would like to change.
## 📄 License
This project is licensed under the MIT License.
## 👨‍💻 Author
Developed by Vikash Gupta 📧 Contact: vikashg802207@gmail.com



