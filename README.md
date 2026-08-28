<div align="center">

# ♻️ Smart Waste Management System

### 🌱 Smart Waste, Smarter Cities

*A modern, frontend-focused smart-city platform to monitor waste collection, manage fleets, optimize routes, track bins, analyze data, and drive citizen engagement through gamification.*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](#)
[![Leaflet](https://img.shields.io/badge/Leaflet.js-199900?style=for-the-badge&logo=leaflet&logoColor=white)](#)
[![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)](#)

![Status](https://img.shields.io/badge/status-active--development-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/license-MIT%20(pending)-blue?style=flat-square)
![Made with](https://img.shields.io/badge/made%20with-%E2%9D%A4%EF%B8%8F%20by%20Pranshu-red?style=flat-square)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Project Structure](#-project-structure)
- [Tech Stack](#️-technologies-used)
- [System Flow](#-system-flow)
- [Getting Started](#-getting-started)
- [Authentication & Backend](#-authentication--backend)
- [Demo Data](#-current-demo-data)
- [Future Roadmap](#-future-improvements)
- [Security Recommendations](#-security-recommendations)
- [Project Goals](#-project-goals)
- [Vision](#-vision)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 📌 Overview

The **Smart Waste Management System (SWMS)** is a frontend-focused smart-city waste management platform with a modern dashboard interface — built to help municipalities cut collection costs, reduce redundant trips, and boost citizen participation in sustainable waste practices.

<table>
<tr>
<td>📊 Waste collection analytics</td>
<td>🗑️ Bin monitoring</td>
<td>🚛 Fleet management</td>
</tr>
<tr>
<td>🗺️ Route optimisation</td>
<td>🔔 Notifications & alerts</td>
<td>🤖 AI prediction interface</td>
</tr>
<tr>
<td>🎮 Environmental awareness game</td>
<td>💡 Waste-management awareness content</td>
<td>🏆 Rewards & points management</td>
</tr>
<tr>
<td>🔐 Login, signup, logout & password recovery</td>
<td>🌙 Dark-mode support</td>
<td>📱 Fully responsive UI</td>
</tr>
</table>

> The main dashboard, **"Smart Waste, Smarter Cities"**, is the command center — providing navigation to every module in the system.

---

## ✨ Key Features

### 📊 Smart Dashboard
The central hub for waste-management operations at a glance:

- Total waste collected
- Active bins
- Recent alerts
- Fleet status
- Collection analytics
- Bin monitoring

Includes interactive charts and map-based components for a real command-center feel.

### 🗑️ Bin Monitoring
A live status view of every bin, color-coded by fill level:

| Status | Meaning |
|--------|---------|
| 🟢 Empty / Low | Safe — no action needed |
| 🟡 Half-filled | Monitor closely |
| 🔴 Full / Critical | Needs immediate collection |

*Currently simulates live updates for demonstration purposes.*

### 🚛 Fleet Management
Manage every waste-collection vehicle from one interface:

- Truck number & driver name
- Contact details
- Live status & last known location
- Capacity & last service date
- Quick truck actions — including adding new trucks

### 🗺️ Route Optimisation
A **Leaflet.js**-powered map interface for smarter collection planning:

- Normal & satellite map views
- Real-time bin tracking
- Real-time truck tracking

### 📈 Collection Analytics
Powered by **Chart.js**, with flexible timeframes:

`Week` → `Month` → `Year`

### 🔔 Notifications & Alerts
A dedicated feed for recent waste-management alerts, with one-click clearing.

### 🤖 AI Predictions
**TensorFlow.js** is wired into the dashboard, laying the foundation for ML-based waste prediction features (bin overflow, demand forecasting, and more — see [roadmap](#-future-improvements)).

### 🏆 Rewards & Points
A municipality-facing panel to manage citizen incentives:

- Citizen names & points
- Rewards & progress tracking
- Status & mark-issued actions

### 🎮 Eco Sorter Game
*"Protect the Environment"* — a gamified waste-sorting challenge with `Go Green`, `Pause`, and `Restart` controls, designed to make segregation fun and educational.

### 💡 Waste Management Awareness
A timeline-style educational page covering:

- What waste management is & why it matters
- Environmental and health impacts
- Recycling best practices

Enhanced with embedded videos, floating visuals, and smooth animations.

### 🔐 Authentication
Complete auth flow — login, signup, forgot-password, and logout — with session-based user info and a built-in offline/demo fallback so the dashboard always opens, even without a live backend.

---

## 🧩 Project Structure

```
Smart-Waste-Management-System/
│
├── 🔐 index.html                     → Login page
├── 📊 index1.html                    → Main Smart Waste dashboard
├── 📝 signup.html                    → Account registration
├── 🔑 forgotpass.html                → Password recovery
│
├── 🗺️ route.html                     → Route optimisation & map interface
├── 🚛 fleetmanagement.html           → Fleet management interface
├── 🚛 fleetmanagement1.html          → Alternate fleet dashboard
├── 🏆 rewardsandpoints.html          → Rewards & points administration
├── 🎮 protect_environment_game.html  → Waste-sorting educational game
├── 💡 awarness.html                  → Waste-management awareness page
│
├── 🎨 style.css                      → Authentication / general styling
├── 🎨 style1.css                     → Main dashboard styling
├── 🎨 awarness.css                   → Awareness-page styling
│
├── ⚙️ script.js                      → Authentication & shared utilities
├── ⚙️ script1.js                     → Dashboard, monitoring, analytics & maps
└── ⚙️ awarness.js                    → Awareness-page animation & interaction
```

<details>
<summary><b>📁 File Purpose Reference (click to expand)</b></summary>

| File | Purpose |
|------|---------|
| `index.html` | Login page |
| `index1.html` | Main Smart Waste dashboard |
| `signup.html` | Account registration interface |
| `forgotpass.html` | Password recovery interface |
| `route.html` | Route optimisation and map interface |
| `fleetmanagement.html` | Fleet management interface |
| `fleetmanagement1.html` | Alternate fleet dashboard |
| `rewardsandpoints.html` | Rewards and points administration |
| `protect_environment_game.html` | Waste-sorting educational game |
| `awarness.html` | Waste-management awareness page |
| `style.css` | Authentication/general styling |
| `style1.css` | Main dashboard styling |
| `awarness.css` | Awareness-page styling |
| `script.js` | Authentication and shared utilities |
| `script1.js` | Dashboard interactions, monitoring, analytics and maps |
| `awarness.js` | Awareness-page animation and interaction |

</details>

---

## 🛠️ Technologies Used

**Frontend**

![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/-Responsive%20Design-4CAF50?style=flat-square)

**Libraries & APIs**

| Library | Purpose |
|---------|---------|
| 📊 **Chart.js** | Analytics and charts |
| 🗺️ **Leaflet.js** | Interactive maps |
| 🔥 **Leaflet Heat** | Heatmap support |
| 🤖 **TensorFlow.js** | AI/ML foundation |
| 🎨 **Font Awesome** | Icons |
| 🔤 **Google Fonts** | Poppins & Inter |

---

## 🔄 System Flow

```
                 ┌─────────────────────┐
                 │      Login Page     │
                 └──────────┬──────────┘
                            │
                   Authentication
                            │
                            ▼
                 ┌─────────────────────┐
                 │   Smart Dashboard   │
                 └──────────┬──────────┘
                            │
        ┌───────────────────┼────────────────────┐
        │                   │                    │
        ▼                   ▼                    ▼
   Bin Monitoring     Fleet Management     Route Optimisation
        │                   │                    │
        └───────────────────┼────────────────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │ Analytics & Alerts  │
                 └──────────┬──────────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
        AI Predictions   Rewards       Awareness
                            │
                            ▼
                    Eco Sorter Game
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/smart-waste-management-system.git
```

### 2️⃣ Open the project

```bash
cd smart-waste-management-system
```

### 3️⃣ Run the frontend

You can open `index.html` directly in a browser, **or** for a smoother dev experience, use a local server such as VS Code Live Server:

```
Open index.html → Right-click → "Open with Live Server"
```

Then visit the local URL shown by your development server. 🎉

---

## 🔑 Authentication & Backend

The frontend is fully prepared to communicate with a backend authentication API.

**Login**
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "your-password"
}
```

**Logout**
```http
POST /api/auth/logout
```

Credentials are sent with the API request, and non-sensitive user info is stored in `sessionStorage`.

> ⚠️ **Note:** The project currently includes an offline/demo fallback login for easy testing. For production, connect to a properly secured backend and remove demo authentication behavior.

---

## 📊 Current Demo Data

Some dashboard data is currently frontend/demo data — bin fill levels are simulated, and analytics show sample collection data.

For a production-ready system, this pipeline should be wired up:

```
IoT Sensors → Backend API → Database → Smart Waste Dashboard
```

---

## 🔮 Future Improvements

<table>
<tr><th>🤖 AI & Machine Learning</th><th>📡 IoT Integration</th></tr>
<tr>
<td>

- Predict bin overflow before it happens
- Predict daily waste generation
- Predict collection demand
- Detect abnormal waste patterns
- Optimize collection schedules

</td>
<td>

- Ultrasonic fill-level sensors
- GPS modules
- Weight sensors
- Temperature sensors
- Gas sensors

</td>
</tr>
<tr><th>🗺️ Advanced Route Optimisation</th><th>📱 Citizen Application</th></tr>
<tr>
<td>

- Dijkstra's Algorithm
- A* Search
- Genetic Algorithm
- Vehicle Routing Problem (VRP)
- Dynamic route optimization

</td>
<td>

- Report overflowing bins
- Request waste pickup
- View collection schedules
- Earn reward points
- Learn waste segregation

</td>
</tr>
</table>

### 🏙️ Smart City Integration Vision

```
Smart Bins → IoT Gateway → Backend / Cloud → AI Prediction Engine
    → Route Optimisation → Collection Fleet → Municipality Dashboard
```

---

## 🔒 Security Recommendations

> Before deploying to production, make sure to:

- ✅ Use HTTPS everywhere
- ✅ Store authentication securely
- ✅ Keep tokens in secure, appropriate cookies
- ✅ Validate all backend inputs
- ✅ Hash passwords on the server
- ✅ Add role-based access control (RBAC)
- ✅ Protect all API endpoints
- ✅ Add rate limiting
- ❌ Never store passwords in frontend code
- ❌ Replace demo/mock authentication with real backend authentication

---

## 🎯 Project Goals

- 🚛 Improve waste-collection efficiency
- 📉 Reduce unnecessary collection trips
- 🗑️ Monitor waste-bin conditions
- 🚚 Support better fleet management
- 🗺️ Improve route planning
- 📊 Provide useful operational analytics
- ♻️ Encourage waste segregation and recycling
- 📢 Increase citizen awareness
- 🤖 Use AI and IoT for smarter waste management
- 🏙️ Support the development of cleaner, smarter cities

---

## 🌱 Vision

<div align="center">

### *"Smart Waste, Smarter Cities."*

The long-term vision is to build an intelligent waste-management ecosystem where **IoT sensors, AI predictions, route optimisation, fleet tracking, analytics, and citizen participation** work together to make urban waste collection more efficient, sustainable, and environmentally responsible.

</div>

---

## 🤝 Contributing

Contributions are always welcome! Here's the workflow:

```bash
# 1. Create a feature branch
git checkout -b feature/your-feature

# 2. Make your changes, then commit
git add .
git commit -m "Add your feature"

# 3. Push and open a Pull Request
git push origin feature/your-feature
```

Then open a **Pull Request** on GitHub. 🚀

---

## 📄 License

This project is currently intended for **educational, prototype, and hackathon development**.

> Add an appropriate open-source license (e.g. MIT License) before publishing for broader reuse.

---

## 👨‍💻 Author

<div align="center">

### **PRANSHU**

Built with 💚 using HTML, CSS, JavaScript and modern web technologies.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pranshusharma7)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/pranshu-kumar-6742a4323)

⭐ *If you found this project interesting, consider giving it a star!*

</div>
