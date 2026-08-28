♻️ Smart Waste Management System

Smart Waste, Smarter Cities 🌱
A modern web-based Smart Waste Management System designed to help municipalities monitor waste collection, manage fleets, optimize routes, track bins, analyze collection data, educate citizens, and encourage sustainable behavior through rewards and gamification.

📌 Overview

The Smart Waste Management System (SWMS) is a frontend-focused smart-city waste management platform with a modern dashboard interface.

The project combines:

📊 Waste collection analytics

🗑️ Bin monitoring

🚛 Fleet management

🗺️ Route optimisation

🔔 Notifications and alerts

🤖 AI prediction interface

🎮 Environmental awareness game

💡 Waste-management awareness content

🏆 Rewards & points management

🔐 Login, signup, logout and password recovery

🌙 Dark-mode support

The main dashboard is titled "Smart Waste, Smarter Cities" and provides navigation to the different modules of the system.

✨ Key Features

📊 Smart Dashboard

The central dashboard provides an overview of waste-management operations, including:

Total waste collected

Active bins

Recent alerts

Fleet status

Collection analytics

Bin monitoring

The dashboard also includes interactive charts and map-based components.

🗑️ Bin Monitoring

The system provides a bin-monitoring interface where fill levels can be displayed and categorized as:

Empty / Low

Half-filled

Full / Critical

The current frontend includes simulated live updates for demonstration purposes.

🚛 Fleet Management

The Fleet Management module provides an interface for managing waste-collection vehicles.

It includes fields for:

Truck number

Driver name

Contact

Status

Last location

Capacity

Last service

Truck actions

Users can also add trucks through the dashboard interface.

🗺️ Route Optimisation

The Route Optimisation module provides a map-based interface for waste-collection planning.

It includes controls for:

Normal map

Satellite map

Bin tracking

Truck tracking

The project uses Leaflet for interactive map functionality.

📈 Collection Analytics

The dashboard contains waste-collection analytics with selectable:

Week

Month

Year

The project uses Chart.js for data visualization.

🔔 Notifications & Alerts

The dashboard includes a notification system for recent waste-management alerts.

Alerts can be cleared from the interface.

🤖 AI Predictions

The dashboard includes an AI Predictions module in the navigation structure and loads TensorFlow.js on the main dashboard, providing a foundation for adding machine-learning-based waste prediction features.

🏆 Rewards & Points

The Rewards & Points module provides a municipality-oriented interface for managing citizen rewards.

It includes:

Citizen names

Points

Rewards

Progress

Status

Mark-Issued actions

🎮 Eco Sorter Game

The project includes an environmental gamification module called Eco Sorter — Protect the Environment.

The game allows users to interact with waste-sorting mechanics and provides controls such as:

Go Green

Pause

Restart

This module is intended to make waste segregation more engaging and educational.

💡 Waste Management Awareness

The Awareness section provides educational content about:

What waste management is

Why waste management is important

Environmental and health impacts

Waste management and recycling

The page uses a timeline-style presentation, embedded educational videos, floating visual elements, and animation effects.

🔐 Authentication

The project contains:

Login page

Signup page

Forgot-password page

Logout functionality

Session-based user information

The login JavaScript attempts to communicate with a backend API using:

POST /api/auth/login

and logout uses:

POST /api/auth/logout

The frontend also includes an offline/demo fallback login so the dashboard can still be opened when the API is unavailable.

🧩 Project Structure

Smart-Waste-Management-System/
│
├── index.html
├── index1.html
├── signup.html
├── forgotpass.html
│
├── route.html
├── fleetmanagement.html
├── fleetmanagement1.html
├── rewardsandpoints.html
├── protect_environment_game.html
├── awarness.html
│
├── style.css
├── style1.css
├── awarness.css
│
├── script.js
├── script1.js
└── awarness.js

Main Files

File

Purpose

index.html

Login page

index1.html

Main Smart Waste dashboard

signup.html

Account registration interface

forgotpass.html

Password recovery interface

route.html

Route optimisation and map interface

fleetmanagement.html

Fleet management interface

fleetmanagement1.html

Alternate fleet dashboard

rewardsandpoints.html

Rewards and points administration

protect_environment_game.html

Waste-sorting educational game

awarness.html

Waste-management awareness page

style.css

Authentication/general styling

style1.css

Main dashboard styling

awarness.css

Awareness-page styling

script.js

Authentication and shared utilities

script1.js

Dashboard interactions, monitoring, analytics and maps

awarness.js

Awareness-page animation and interaction

🛠️ Technologies Used

Frontend

HTML5

CSS3

JavaScript

Responsive Web Design

Libraries & APIs

Chart.js — analytics and charts

Leaflet.js — interactive maps

Leaflet Heat — heatmap support

TensorFlow.js — AI/ML foundation

Font Awesome — icons

Google Fonts — Poppins and Inter

🔄 System Flow

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

🚀 Getting Started

1. Clone the repository

git clone https://github.com/YOUR-USERNAME/smart-waste-management-system.git

2. Open the project

cd smart-waste-management-system

3. Run the frontend

You can open index.html directly in a browser.

For a better development experience, use a local server such as VS Code Live Server.

Example:

Open index.html → Start Live Server

Then open the local URL shown by your development server.

🔑 Authentication & Backend

The frontend is prepared to communicate with a backend authentication API.

Login

POST /api/auth/login
Content-Type: application/json

Example request:

{
  "email": "user@example.com",
  "password": "your-password"
}

Logout

POST /api/auth/logout

The frontend sends credentials with the API request and stores non-sensitive user information in sessionStorage.

⚠️ The current project also contains an offline/demo fallback login. For production deployment, connect the authentication flow to a properly secured backend and remove demo authentication behavior.

📊 Current Demo Data

Some dashboard information is currently implemented as frontend/demo data.

For example, bin fill levels can be simulated and updated periodically, while analytics can display sample collection data.

For a production-ready system, these values should be replaced with data received from:

IoT Sensors
     ↓
Backend API
     ↓
Database
     ↓
Smart Waste Dashboard

🔮 Future Improvements

The project can be extended into a complete IoT + AI smart-city platform.

🤖 AI & Machine Learning

Predict bin overflow before it happens

Predict daily waste generation

Predict collection demand

Detect abnormal waste patterns

Optimize collection schedules

📡 IoT Integration

Connect real smart bins using:

Ultrasonic fill-level sensors

GPS modules

Weight sensors

Temperature sensors

Gas sensors

🗺️ Advanced Route Optimisation

Implement algorithms such as:

Dijkstra

A*

Genetic Algorithm

Vehicle Routing Problem (VRP)

Dynamic route optimization

📱 Citizen Application

Add a citizen-facing application for:

Reporting overflowing bins

Requesting waste pickup

Viewing collection schedules

Earning reward points

Learning waste segregation

🏙️ Smart City Integration

Future versions can integrate:

Smart Bins
     ↓
IoT Gateway
     ↓
Backend / Cloud
     ↓
AI Prediction Engine
     ↓
Route Optimisation
     ↓
Collection Fleet
     ↓
Municipality Dashboard

🔒 Security Recommendations

Before using the project in production:

Use HTTPS

Store authentication securely

Keep authentication tokens in secure, appropriate cookies

Validate all backend inputs

Hash passwords on the server

Add role-based access control

Protect API endpoints

Add rate limiting

Never store passwords in frontend code

Replace demo/mock authentication with real backend authentication

🎯 Project Goals

The main goals of the Smart Waste Management System are to:

Improve waste-collection efficiency.

Reduce unnecessary collection trips.

Monitor waste-bin conditions.

Support better fleet management.

Improve route planning.

Provide useful operational analytics.

Encourage waste segregation and recycling.

Increase citizen awareness.

Use AI and IoT for smarter waste management.

Support the development of cleaner and smarter cities.

🌱 Vision

"Smart Waste, Smarter Cities."

The long-term vision is to build an intelligent waste-management ecosystem where IoT sensors, AI predictions, route optimisation, fleet tracking, analytics, and citizen participation work together to make urban waste collection more efficient, sustainable, and environmentally responsible.


📄 License

This project is currently intended for educational, prototype, and hackathon development.

Add an appropriate open-source license such as MIT License before publishing the project for broader reuse.

👨‍💻 Author

PRANSHU

Smart Waste Management System
Built with HTML, CSS, JavaScript and modern web technologies.
