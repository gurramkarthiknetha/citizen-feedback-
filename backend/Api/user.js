const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  adhar: { type: String, required: true },
});

const usermodel = mongoose.model('User', userSchema);

module.exports = { usermodel };