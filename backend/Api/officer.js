const mongoose = require('mongoose');

const officerSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  department_id : { type:Number ,required:true},
  department_name : { type:String ,required:true},
  phone: { type: String, required: true },
});

const officermodel = mongoose.model('Officer', officerSchema);

module.exports = { officermodel };
