const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  hashedPassword: { type: String, required: true },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
