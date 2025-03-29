const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const adminmodel = mongoose.model('Admin', adminSchema);

module.exports = { adminmodel };