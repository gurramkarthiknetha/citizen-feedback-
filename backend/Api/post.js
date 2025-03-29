const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  tags: {
    priority: { type: String, enum: ['High', 'Medium', 'Low'], required: true },
    category: { type: String, required: true },
    status: { type: String, enum: ['Open', 'In Progress', 'Resolved'], default: 'Open' }
  },
  address: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const postModel = mongoose.model('Post', postSchema);

module.exports = { postModel };
