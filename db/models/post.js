const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

module.exports = mongoose.model('Posts', PostSchema);