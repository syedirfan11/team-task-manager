Team Task Manager

A full-stack MERN application designed to simplify task management and improve productivity for teams and individuals. The application allows users to create, manage, update, and track tasks through an interactive dashboard interface.

📌 Features
🔐 User Authentication System
📝 Create Tasks
📋 View All Tasks
✏️ Update Task Status
❌ Delete Tasks
📊 Dashboard Interface
⚡ REST API Integration
🌐 MongoDB Database Connectivity
🎨 Responsive User Interface
🚀 Tech Stack

Frontend
React.js
Vite
Axios
Tailwind CSS
React Router DOM

Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
Bcrypt.js

📂 Project Structure
team-task-manager
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── server.js
│
├── frontend
│   ├── src
│   ├── pages
│   ├── components
│   ├── App.jsx
│
└── README.md

⚙️ Installation & Setup
Clone Repository
git clone https://github.com/syedirfan11/team-task-manager.git

Backend Setup
cd backend
npm install
npx nodemon server.js

Frontend Setup
cd frontend
npm install
npm run dev

🔑 Environment Variables

Create a .env file inside the backend folder.

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
📈 Future Improvements
JWT Protected Routes
Role-Based Access Control
Real-Time Notifications
Team Collaboration Features
Dark Mode Support
Drag & Drop Task Management

🎯 Learning Outcomes

This project helped in understanding:

Full-stack MERN architecture
REST API development
MongoDB integration
Authentication & Authorization
Frontend-backend communication
Git & GitHub workflow
