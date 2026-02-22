# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🏥 Intelligent Healthcare Management System

<p align="center">
  <img src="https://img.shields.io/badge/Backend-Django-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/API-REST-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Automation-Celery-red?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
</p>

---

## 🚀 Project Overview

An intelligent, automation-driven **Healthcare Management Backend System** built using **Django REST Framework**.

This system focuses on:

- 🔐 Secure authentication
- 📅 Smart appointment scheduling
- 🚑 Emergency routing & escalation
- 💊 Medicine management
- 🔔 Automated notifications
- 🤖 Risk-based automation engine

Designed with **clean architecture**, scalability, and production readiness in mind.

---

# 🏗 System Architecture

```
Client (Web / Mobile)
        │
        ▼
Django REST API Layer
        │
        ▼
Service Layer (Business Logic)
        │
        ▼
Automation Engine + Background Tasks
        │
        ▼
PostgreSQL Database
```

---

# 🔥 Core Backend Modules

## 🔐 Authentication & Authorization
- User Registration
- Secure Login
- OTP Verification
- JWT Access & Refresh Tokens
- Role-Based Access Control (Patient / Doctor / Admin)
- Account Lock After Failed Attempts

---

## 👤 User Profile Service
- Separate Patient & Doctor Profiles
- Doctor Specialization
- Availability Scheduling
- Profile Management

---

## 📅 Appointment Management
- Book / Cancel / Reschedule
- Conflict Detection (No Double Booking)
- Appointment Status Flow:
  ```
  Booked → Ongoing → Completed
  ```
- Doctor & Patient History Tracking

---

## 🚑 Emergency Routing System
- Location-Based Hospital Detection
- Emergency Priority Queue
- Auto Doctor Notification
- Escalation if Unanswered

---

## 💊 Medicine Management
- Medicine Listing
- Stock Tracking
- Order Placement
- Automatic Stock Deduction
- Order Status Updates

---

# 🤖 Intelligent Automation Engine

### 🧠 Risk-Based Appointment Prioritization
- Detect high-risk patients
- Auto-prioritize bookings
- Suggest urgent slots

### 📆 Automated Follow-Up Scheduling
- Auto-create follow-ups after consultation
- Send reminders
- Detect missed follow-ups

### 🚨 Emergency Escalation Automation
- If not accepted within X minutes:
  - Escalate to next hospital
  - Notify admin
- Maintain priority queue

### ⏰ Time-Based Background Triggers
- Expire OTP automatically
- Send 24-hour appointment reminders
- Auto-update appointment status
- Detect suspicious login attempts

---

# ⚙️ Background Task Processing

Powered by:

- Celery / Django Q
- Redis
- Scheduled Jobs
- Event-Based Triggers
- Async Notification Processing

---

# 📊 Analytics & Reporting

- Doctor Performance Metrics
- Appointment Completion Rate
- Emergency Frequency Tracking
- Weekly / Monthly Reports

---

# 🛡 Security & Audit

- Login Attempt Logging
- Admin Action Logs
- Suspicious Activity Detection
- Full Audit Trail

---

# 📂 Project Structure

```
healthcare_system/
│
├── authentication/
├── users/
├── appointments/
├── emergency/
├── medicine/
├── automation/
├── notifications/
├── analytics/
├── audit/
├── background_tasks/
│
└── core/
```

---

# 📌 Technologies Used

- Python
- Django
- Django REST Framework
- JWT Authentication
- Celery / Django Q
- PostgreSQL
- Redis

---

# 📈 Current Progress

## ✅ Completed
- Authentication System
- User Role Management
- Appointment Booking Logic
- Emergency Routing Base
- Medicine Module
- Automation Engine Framework
- Background Task Setup

## 🚧 In Progress
- Advanced Risk Rules
- Dashboard Analytics
- Performance Optimization

## 🔜 Upcoming
- Deployment Setup
- Swagger API Documentation
- Production Hardening

---

# 🧪 Sample API Endpoints

```
POST   /api/auth/register/
POST   /api/auth/login/
GET    /api/appointments/
POST   /api/appointments/book/
POST   /api/emergency/request/
GET    /api/analytics/dashboard/
```

---

# 🎯 Future Enhancements

- AI-Based Risk Prediction
- Real-Time Notifications (WebSockets)
- Mobile App Integration
- Microservices Architecture Upgrade
- Docker & CI/CD Pipeline

---

# 👨‍💻 Author

Built as a scalable backend architecture project focused on intelligent healthcare automation.

---

<p align="center">
  ⭐ If you like this project, give it a star on GitHub!
</p>
