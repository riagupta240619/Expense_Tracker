# 💰 Expense Tracker & Wealth Management Platform

<div align="center">

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.2-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose%209-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-Real--Time-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://socket.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Modern_UI-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<p align="center">
  <b>A comprehensive, full-stack personal finance and wealth management system for tracking cashflow, bills, fixed deposits, live gold investments, and digital receipts.</b>
</p>

</div>

---

## 📖 Overview

**Expense Tracker** is a production-ready personal wealth management platform designed to give users complete control over their financial health. Built using a modern **React 19 + Vite** frontend and an **Express 5 + MongoDB** backend, the application unifies daily expense logging, recurring bill management, investment portfolios (Fixed Deposits and Digital Gold), and receipt digitization into one cohesive, interactive dashboard.

---

## ✨ Key Features

### 📊 Financial Dashboard & Analytics
- **Live Cashflow Summary**: Real-time snapshot of total balance, monthly expenditures, and active investments.
- **Categorized Spending Breakdown**: Interactive visual analytics displaying spending across utilities, entertainment, food, investments, and more.
- **Recent Transaction Feed**: Instant visibility into the latest bills and wealth updates.

### 💳 Bill & Expense Management
- **Add & Organize Bills**: Log one-off expenses and recurring subscriptions with custom categories and payment methods.
- **Due Date Tracking**: Monitor pending, paid, and overdue bills to eliminate late fees.
- **Filter & Search**: Efficiently view, update, and search historical bills.

### 🧾 Smart Receipt Scanner & Storage
- **Receipt Uploads**: Upload invoice and receipt images via **Multer**.
- **Cloud Asset Storage**: Securely store and retrieve proof-of-payment receipts using **Cloudinary**.
- **Receipt Association**: Automatically link uploaded receipt images directly to corresponding bill records.

### 🏦 Fixed Deposit (FD) Portfolio
- **Investment Management**: Track multiple bank FDs with principal amounts, interest rates, and tenures.
- **Maturity Calculator**: Real-time compounding interest computations showing total expected payout upon maturity.
- **Status Monitoring**: Visual indicators for active vs. matured fixed deposit investments.

### 🪙 Real-Time Digital Gold Tracker
- **Live WebSocket Streaming**: Embedded **Socket.io** (`/gold` namespace) streams live fluctuating market gold prices every 3 seconds.
- **Gold Holdings Ledger**: Record buy and sell transactions with timestamps and rates.
- **Live Profit/Loss**: Dynamic portfolio valuation calculating total returns based on real-time gold rates.

### 🔐 Security & User Management
- **Authentication**: Secure sign-up and login utilizing **JSON Web Tokens (JWT)** and **HTTP-only cookie sessions**.
- **Password Protection**: Passwords salted and hashed with **bcrypt**.
- **Automated Retention Cleaner**: Scheduled **node-cron** job that permanently purges soft-deleted user accounts past the 30-day retention window.

### 🎨 Modern UI & Experience
- **Sleek Interface**: Built with Tailwind CSS, Lucide React icons, and custom CSS design systems.
- **Theme Support**: Seamless toggling between Dark Mode and Light Mode with persistent user preferences.
- **Admin Portal**: Integrated server-side EJS admin console (`/admin/stats`) displaying system-wide user and bill statistics.

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   React 19 + Vite Client                    │
│   ├── Financial Dashboard       ├── Bill Management         │
│   ├── Fixed Deposit Tracker     ├── Live Gold Ticker (WS)   │
│   └── Receipt Upload View       └── Dark / Light Theming    │
└──────────────────────────────┬──────────────────────────────┘
                               │ HTTP REST / WebSocket
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                    Node.js & Express 5                      │
│   ├── JWT Auth & Cookie Parser  ├── Multer & Cloudinary SDK │
│   ├── REST Controllers          ├── Socket.io Server (/gold)│
│   └── Node-Cron Scheduler       └── EJS Admin View Engine   │
└──────────────────────────────┬──────────────────────────────┘
                               │ Mongoose 9 ODM
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                       MongoDB Database                      │
│   ├── Users Collection          ├── Bills Collection        │
│   ├── FDs Collection            └── Gold Ledger Collection  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19, Vite 7 | High-performance Single Page Application (SPA) |
| **Routing** | React Router DOM v7 | Declarative client-side routing & page navigation |
| **UI Styling** | Tailwind CSS, Lucide React | Modern, responsive dark-mode styling and iconography |
| **HTTP Client** | Axios | REST API communication with interceptors |
| **Real-Time Client** | Socket.io-client | Live WebSocket listener for streaming gold ticker prices |
| **Backend Framework** | Node.js, Express 5 | Scalable REST API server & middleware architecture |
| **Database** | MongoDB & Mongoose 9 | NoSQL document storage & schema validation |
| **Authentication** | JWT (jsonwebtoken), bcrypt, cookie-parser | Stateless auth with salted hash encryption |
| **File Storage** | Multer, Cloudinary SDK | Multi-part form receipt uploads & cloud storage |
| **Real-Time Server** | Socket.io | Bidirectional WebSocket channels for price streaming |
| **Automation** | Node-cron | Scheduled automated background retention tasks |
| **Dev Tooling** | Concurrently, Nodemon | Concurrent full-stack local development |

---

## 📁 Project Structure

```
Expense Tracker/
├── BackEnd/
│   ├── config/
│   │   ├── db.js                 # MongoDB connection handler
│   │   └── cloudinary.js         # Cloudinary storage configuration
│   ├── Controllers/
│   │   ├── authController.js     # User registration, login, logout
│   │   ├── billController.js     # Bill CRUD and payment tracking
│   │   ├── dashboardController.js# Aggregated analytics and metrics
│   │   ├── fdController.js       # Fixed Deposit portfolio & calculations
│   │   └── goldController.js     # Gold investments and P&L tracking
│   ├── Middleware/
│   │   └── multer.js             # Image upload parsing middleware
│   ├── Models/
│   │   ├── User.js               # User authentication schema
│   │   ├── Bill.js               # Bill and expense schema
│   │   ├── FD.js                 # Fixed Deposit schema
│   │   └── GoldTransaction.js    # Gold transaction records schema
│   ├── Routes/
│   │   ├── auth_routes_new.js    # Authentication API routes
│   │   ├── billRoutes.js         # Expense & bill endpoints
│   │   ├── dashboardRoutes.js    # Metric summary endpoints
│   │   ├── fd_routes.js          # Fixed deposit endpoints
│   │   ├── gold_routes.js        # Gold trading endpoints
│   │   ├── receiptRoutes.js      # Receipt upload & analysis routes
│   │   └── upload.js             # File upload routing
│   ├── views/
│   │   └── admin.ejs             # Server-rendered admin statistics portal
│   ├── Uploads/                  # Local fallback upload directory
│   ├── index.js                  # Express entrypoint, Socket.io, cron
│   └── package.json
│
├── FrontEnd/
│   ├── public/                   # Static browser assets
│   ├── src/
│   │   ├── assets/               # Images and illustrations
│   │   ├── Components/
│   │   │   ├── layout/           # Sidebar, Topbar, Layout shell
│   │   │   ├── ui/               # Reusable UI primitives
│   │   │   └── BillForm.jsx      # Dynamic bill creation form
│   │   ├── context/
│   │   │   ├── AuthContext.jsx   # Global user auth state
│   │   │   └── ThemeContext.jsx  # Dark/Light theme provider
│   │   ├── Pages/
│   │   │   ├── Landing.jsx       # Public landing page
│   │   │   ├── Login.jsx         # Sign-in portal
│   │   │   ├── Register.jsx      # Account creation portal
│   │   │   ├── Dashboard.jsx     # Main financial analytics view
│   │   │   ├── AddBill.jsx       # Expense creation form
│   │   │   ├── ViewBills.jsx     # Expense list with search & filter
│   │   │   ├── FD.jsx            # Fixed Deposit tracker & calculator
│   │   │   ├── Gold.jsx          # Live Gold portfolio & WS ticker
│   │   │   ├── UploadReceipt.jsx # Receipt scanner & uploader
│   │   │   └── Settings.jsx      # Profile & preference settings
│   │   ├── App.jsx               # Route definitions
│   │   └── main.jsx              # Application bootstrap
│   ├── vite.config.js
│   └── package.json
│
├── package.json                  # Root runner (concurrently scripts)
└── README.md
```

---

## 🔌 API Reference

### Authentication (`/api/auth`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user account |
| `POST` | `/api/auth/login` | Authenticate user & issue JWT cookie |
| `POST` | `/api/auth/logout` | Clear session cookie |
| `GET` | `/api/auth/me` | Fetch authenticated user profile |

### Bills & Expenses (`/api/bills`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/bills` | Retrieve all user bills |
| `POST` | `/api/bills` | Create a new bill or expense record |
| `PUT` | `/api/bills/:id` | Update an existing bill |
| `DELETE` | `/api/bills/:id` | Remove a bill |

### Wealth & Investments
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/fd` | List all Fixed Deposits with maturity totals |
| `POST` | `/api/fd` | Create a new Fixed Deposit entry |
| `GET` | `/api/gold` | Retrieve gold transaction history & holdings |
| `POST` | `/api/gold` | Record a gold buy/sell transaction |

### Receipts & Dashboard
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/receipts/upload` | Upload receipt image to Cloudinary via Multer |
| `GET` | `/api/dashboard/stats` | Retrieve aggregated cashflow & expense metrics |
| `GET` | `/admin/stats` | Server-rendered EJS admin dashboard |

---

## ⚡ Quick Start

### 1. Prerequisites
- **Node.js** (v18.x or v20.x recommended)
- **MongoDB** (Local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))
- **Cloudinary Account** (for receipt asset uploads)

### 2. Clone Repository
```bash
git clone https://github.com/riagupta240619/Expense_Tracker.git
cd Expense_Tracker
```

### 3. Environment Configuration
Create a `.env` file in the `BackEnd/` directory:

```env
PORT=5001
MONGO_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### 4. Install Dependencies
Install dependencies for root, backend, and frontend:

```bash
# Root dependencies
npm install

# Backend dependencies
cd BackEnd && npm install && cd ..

# Frontend dependencies
cd FrontEnd && npm install && cd ..
```

### 5. Run Concurrently (Frontend + Backend)
From the root project folder:

```bash
npm run dev
```

- **Frontend App**: `http://localhost:5173`
- **Backend API Server**: `http://localhost:5001`
- **Admin Stats Portal**: `http://localhost:5001/admin/stats`

---

## 📄 License

This project is licensed under the **ISC License**.
