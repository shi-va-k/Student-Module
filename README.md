# 🎓 Student Management API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB** to manage student records. This API allows you to create, read, update, and soft-delete student data.

---

## 🚀 Features
✅ Create a new student  
✅ Retrieve all students with pagination  
✅ Retrieve a student by Registration Number  
✅ Update student details  
✅ Soft delete (mark student as inactive)  

---

## 🛠️ Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv (Environment Variables)

---

## 📂 Project Structure

├── controllers/ │ └── studentControllers.js
├── models/ │ └── studentModels.js
├── routes/ │ └── studentRoutes.js
├── .env
├── .gitignore
├── server.js 
└── README.md

---

## 📖 API Endpoints

| Method | Endpoint                       | Description                        
|------- |------------------------------- |------------------------------------ 
| POST   | `/api/students`                | Create a new student               
| GET    | `/api/students?page=1&limit=10`| Get all students (paginated)  you will get students by page per 10 students    
| GET    | `/api/students/:regNo`         | Get student by registration number 
| PUT    | `/api/students/:regNo`         | Update student details             
| DELETE | `/api/students/:regNo`         | Soft delete (mark inactive)        

