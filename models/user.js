const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  author_name: String,
  author_email: String,
  author_user: String,
  author_pwd: String,
  author_level: String,
  author_status: Boolean
});

module.exports = mongoose.model('User', userSchema);
