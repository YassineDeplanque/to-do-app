# 📝 To-Do List App

A simple, dynamic To-Do List application built with **React** (frontend) and **Node.js/Express** + **MySQL** (backend). Easily add, edit, and delete tasks, all persisted in a MySQL database.

---

## 🚀 Features

- ✅ **Add a new task**
- ✏️ **Edit an existing task**
- ❌ **Delete a task**
- 🔄 **Instant, dynamic updates** (no page reload)
- 🌐 **REST API integration** (Axios)

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite or CRA)
- **Backend:** Node.js + Express
- **Database:** MySQL
- **HTTP Client:** Axios
- **Styling:** Custom CSS (`List.css`, `AddTasks.css`)

---

## 📂 Project Structure

```
todo-app/
│
├── backend/                 
│   ├── server.js            # Express server
│   ├── db.sql               # MySQL schema & seed data
│   └── routes/              # API routes (CRUD)
│
├── frontend/                
│   ├── src/
│   │   ├── components/
│   │   │   ├── List.jsx     # Display tasks
│   │   │   ├── AddTasks.jsx # Add new task
│   │   │   ├── List.css
│   │   │   └── AddTasks.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

**1. Clone the repository:**
```bash
git clone https://github.com/username/todo-app.git
cd todo-app
```

**2. Set up MySQL Database:**
```sql
CREATE DATABASE todolist;
USE todolist;

CREATE TABLE todo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  texte VARCHAR(255) NOT NULL
);
```

**3. Start Backend (Node.js/Express + MySQL):**
```bash
cd backend
npm install
node server.js
```
- API runs at: [http://localhost:3000/todo](http://localhost:3000/todo)

**4. Start Frontend (React):**
```bash
cd frontend
npm install
npm run dev
```
- Frontend runs at: [http://localhost:5173](http://localhost:5173)

---

## 📌 API Endpoints

- **GET `/todo`** &rarr; Fetch all tasks
- **POST `/todo`** &rarr; Add a new task `{texte}`
- **PUT `/todo/:id`** &rarr; Edit a task
- **DELETE `/todo/:id`** &rarr; Delete a task

---

## 📄 License

Built for educational purposes. Free to use and modify.

---