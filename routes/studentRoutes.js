// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentControllers');

// Define your routes here
router.post('/students', studentController.createStudent);
router.get('/students', studentController.getAllStudents);
router.get('/students/:regNo', studentController.getStudentByRegNo);
router.put('/students/:regNo', studentController.updateStudent);
router.delete('/students/:regNo', studentController.deleteStudent);

module.exports = router;  
