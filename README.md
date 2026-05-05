# SIEJA

> AI-Powered Private Idea Management Platform

SIEJA is a modern full-stack SaaS platform where users can securely submit innovative ideas/problems and track their progress while internal admins review, manage, analyze, and communicate with users using AI-assisted tools.

The platform focuses on:
- Private idea management
- Realtime communication
- AI-powered admin workflow
- Secure role-based architecture
- Modern scalable SaaS infrastructure

---

# 🚀 Core Features

## 🌐 Public Website
Before authentication, users can explore:
- Landing page
- About section
- Features
- Workflow explanation
- FAQ
- Contact section
- Authentication pages

---

## 🔐 Authentication System
- User Signup
- User Login
- JWT Authentication
- Refresh Tokens
- Email Verification
- Forgot Password
- Reset Password
- Role-Based Access Control

---

## 👤 User Dashboard
Users can:
- Create profiles
- Submit ideas
- Track idea statuses
- Upload attachments
- Chat with admins
- Receive notifications
- Manage account settings

---

## 🛠️ Admin Dashboard
Admins can:
- Review submitted ideas
- Change statuses
- Manage users
- Add internal notes
- Communicate with users
- View analytics
- Use AI-powered review tools

---

## 🤖 AI Features
AI tools help admins:
- Generate idea summaries
- Detect duplicate ideas
- Suggest categories
- Analyze feasibility
- Prioritize ideas
- Generate smart insights

---

## 💬 Realtime Communication
- User ↔ Admin chat
- Socket.IO realtime updates
- Typing indicators
- Message notifications
- Chat history storage

---

## 🔒 Privacy System
Ideas are completely private.

Only:
- Idea Owner
- Admin Team

can access submitted ideas.

---

# 🧱 Tech Stack

## Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand
- Framer Motion
- React Hook Form
- Zod

---

## Backend
- NestJS
- TypeScript
- REST API
- Socket.IO
- JWT Authentication

---

## Database
- PostgreSQL

---

## ORM
- Prisma ORM

---

## File Storage
- Cloudinary

---

## Deployment
### Frontend
- Vercel

### Backend
- Railway / Render

### Database
- PostgreSQL Cloud Hosting

---

# 📂 Project Structure

```bash
SIEJA/
│
├── client/                     # Frontend (Next.js)
│   ├── app/
│   ├── components/
│   ├── features/
│   ├── hooks/
│   ├── lib/
│   ├── services/
│   ├── store/
│   ├── styles/
│   ├── types/
│   └── utils/
│
├── server/                     # Backend (NestJS)
│   ├── src/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── profiles/
│   │   ├── ideas/
│   │   ├── admin/
│   │   ├── ai/
│   │   ├── chat/
│   │   ├── notifications/
│   │   ├── analytics/
│   │   ├── common/
│   │   ├── prisma/
│   │   └── main.ts
│   │
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   │
│   └── test/
│
├── docs/
│
├── .env
├── docker-compose.yml
├── README.md
└── package.json