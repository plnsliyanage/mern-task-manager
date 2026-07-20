# MERN User-Based Task Management Web Application

A full-stack Task Management Web Application developed using the MERN stack.

This application allows users to register, login, and securely manage their own tasks. Users can create, view, update, delete, search, and filter tasks with JWT-based authentication.

---

# 🚀 Live Demo

## Frontend

```
https://mern-task-manager-eosin.vercel.app
```

## Backend API

```
https://mern-task-manager-backend-nd2p.onrender.com
```

---

# ✨ Features

## Authentication

- User Registration
- User Login
- Secure password hashing using bcrypt
- JWT authentication
- Token storage using localStorage
- Protected routes
- Logout functionality
- Get logged-in user details


## Task Management

Users can:

- Create tasks
- View their own tasks
- Update tasks
- Delete tasks
- Change task status
- Search tasks
- Filter tasks


## Task Details

Each task contains:

- Title
- Description
- Status
    - Pending
    - Completed
- Priority
    - Low
    - Medium
    - High
- Due Date
- Created Date
- Updated Date


---

# 🛠️ Technologies Used


## Frontend

- React.js
- Vite
- Redux Toolkit
- React Redux
- React Router DOM
- Axios
- Tailwind CSS
- React Hooks
- React Hot Toast


## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- cors


---

# 📂 Project Structure

```
mern-task-manager

│
├── backend
│   │
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   └── utils
│   │
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
│
└── frontend
    │
    ├── src
    │   ├── components
    │   ├── features
    │   ├── pages
    │   ├── routes
    │   └── services
    │
    ├── package.json
    ├── vite.config.js
    └── .env

```

---

# ⚙️ Installation and Setup


## Requirements

Install the following:

- Node.js
- npm
- MongoDB Atlas account


---

# Backend Setup


### 1. Navigate to backend folder

```bash
cd backend
```


### 2. Install dependencies

```bash
npm install
```


### 3. Create Environment File

Create:

```
.env
```

inside backend folder.


Add:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

NODE_ENV=development
```


### 4. Start Backend Server


Development:

```bash
npm run dev
```


Production:

```bash
npm start
```


Backend runs on:

```
http://localhost:5000
```


---

# Frontend Setup


### 1. Navigate to frontend folder

```bash
cd frontend
```


### 2. Install dependencies

```bash
npm install
```


### 3. Create Environment File


Create:

```
.env
```


Add:

```env
VITE_API_URL=http://localhost:5000
```


For production:

```env
VITE_API_URL=https://mern-task-manager-backend-nd2p.onrender.com
```


### 4. Start Frontend


```bash
npm run dev
```


Frontend runs on:

```
http://localhost:5173
```


---

# 🔐 Authentication Flow


1. User registers an account.

2. Password is encrypted using bcrypt.

3. Server generates JWT token.

4. Token is stored in localStorage.

5. Token is attached to API requests.

6. Backend verifies token before allowing access.


---

# 🔗 API Documentation


# Authentication APIs


## Register User

```
POST /api/auth/register
```


Request:

```json
{
    "name":"John",
    "email":"john@gmail.com",
    "password":"123456"
}
```


---

## Login User

```
POST /api/auth/login
```


Request:

```json
{
    "email":"john@gmail.com",
    "password":"123456"
}
```


---

## Get Current User

```
GET /api/auth/me
```


Authorization:

```
Bearer Token
```


---

# Task APIs


## Get All Tasks

```
GET /api/tasks
```


---

## Create Task

```
POST /api/tasks
```


Example:

```json
{
    "title":"Complete MERN Project",
    "description":"Finish internship assignment",
    "priority":"high",
    "dueDate":"2026-07-25"
}
```


---

## Get Single Task

```
GET /api/tasks/:id
```


---

## Update Task

```
PUT /api/tasks/:id
```


---

## Delete Task

```
DELETE /api/tasks/:id
```


---

## Update Task Status

```
PATCH /api/tasks/:id/status
```


Example:

```json
{
    "status":"completed"
}
```


---

# ⭐ Bonus Features Implemented


## Search

Users can search tasks by:

- Title
- Description


## Filter

Available filters:

- All
- Completed
- Pending


---

# 🌐 Deployment


## Frontend

Platform:

```
Vercel
```


URL:

```
ADD_YOUR_FRONTEND_URL
```


---

## Backend

Platform:

```
Render
```


URL:

```
https://mern-task-manager-backend-nd2p.onrender.com
```


---

# 🧪 Testing Completed


The application has been tested for:


✅ User Registration  
✅ User Login  
✅ JWT Authentication  
✅ Protected Routes  
✅ Create Task  
✅ View Tasks  
✅ Update Task  
✅ Delete Task  
✅ Update Status  
✅ Search Feature  
✅ Filter Feature  
✅ Logout  


---

# 👩‍💻 Author


**Nimna Liyanage**

Computer Science Undergraduate





---

# 📄 License


This project was developed as part of a Full Stack Developer Internship Technical Assessment.
