# 📝 PERN Todo App

A full-stack Todo application built using the **PERN Stack** — PostgreSQL, Express, React, and Node.js. This project demonstrates how to build a modern, scalable web application with complete CRUD functionality and a clean user interface.

🔗 **Live Demo:** [https://pern-todo-app-1.onrender.com](https://pern-todo-app-1.onrender.com)

---

## 🚀 Overview

This project is a complete Todo application where users can:

* Add new tasks
* View all tasks
* Update existing tasks
* Delete tasks
* Mark tasks as completed

It showcases how to connect a React frontend with a Node.js/Express backend and a PostgreSQL database.

---

## ✨ What You'll Learn

* Setting up a React frontend using modern hooks (`useState`, `useEffect`)
* Building a RESTful API with Node.js and Express
* Designing and managing a PostgreSQL database
* Performing CRUD operations (Create, Read, Update, Delete)
* Connecting frontend and backend effectively
* Implementing optimistic UI updates
* Handling loading states and errors
* Styling UI using Tailwind CSS
* Testing APIs using Postman
* Managing databases using pgAdmin

---

## ⚡ Features

* ✅ Full CRUD functionality
* ⚛️ Modern React with Hooks
* 🎨 Responsive UI with Tailwind CSS
* ⚡ Optimistic UI updates for better UX
* 🔗 RESTful API with Express.js
* 🗄️ PostgreSQL database integration
* ❗ Error handling & loading states
* 🧪 API testing with Postman
* 🛠️ Database management via pgAdmin

---

## 🏗️ Tech Stack

* **Frontend:** React (Vite) + Tailwind CSS
* **Backend:** Node.js + Express.js
* **Database:** PostgreSQL

---

## 📂 Project Structure

```
pern-todo-app/
│
├── backend/
│   ├── .env
│   ├── index.js
│   └── db.js
│
├── frontend/
│   ├── .env
│   └── src/
│
└── README.md
```

---

## ⚙️ Environment Variables

### 📌 Backend (`/backend/.env`)

```
NODE_ENV=
PORT=
DATABASE_URL=
FRONTEND_URL=
```

### 📌 Frontend (`/frontend/.env`)

```
VITE_API_URL=
```

---

## 🗄️ Database Setup

### 1️⃣ Create Database

```sql
CREATE DATABASE your_database_name;
```

### 2️⃣ Create Todo Table

```sql
CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    description TEXT,
    completed BOOLEAN DEFAULT false
);
```

---

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pern-todo-app.git
cd pern-todo-app
```

### 2. Setup Backend

```bash
cd backend
npm install
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔌 API Endpoints

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /todos     | Get all todos   |
| GET    | /todos/:id | Get single todo |
| POST   | /todos     | Create new todo |
| PUT    | /todos/:id | Update todo     |
| DELETE | /todos/:id | Delete todo     |

---

## 🧪 Testing

* Use **Postman** to test API endpoints
* Use **pgAdmin** to view and manage database records

---

## 🎯 Future Improvements

* Authentication (JWT)
* User-specific todos
* Drag-and-drop task ordering
* Dark mode
* Deployment with Docker

---

## 📸 Demo

👉 [https://pern-todo-app-1.onrender.com](https://pern-todo-app-1.onrender.com)

---

## 📺 Screenshots

<img width="1920" height="911" alt="image" src="https://github.com/user-attachments/assets/701d8af5-234f-4dc9-b984-eb489a8586d2" />

---

## 📌 Conclusion

This project is a great starting point for learning full-stack development using the PERN stack. It covers everything from backend API development to frontend UI design and database management.

---
