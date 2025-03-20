const Student = require('../models/studentModels');

// Create Student
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Students with Pagination
exports.getAllStudents = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const students = await Student.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Student by Registration Number
exports.getStudentByRegNo = async (req, res) => {
  try {
    const student = await Student.findOne({ registrationNumber: req.params.regNo });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Student
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { registrationNumber: req.params.regNo },
      req.body,
      { new: true }
    );
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Soft Delete Student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { registrationNumber: req.params.regNo },
      { status: false },
      { new: true }
    );
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student marked as inactive' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
