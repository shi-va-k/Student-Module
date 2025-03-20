const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  className: { type: String, required: true },
  rollNo: { type: Number, required: true },
  contactNumber: { type: String, required: true },
  status: { type: Boolean, default: true }
});

module.exports = mongoose.model('Student', studentSchema);
