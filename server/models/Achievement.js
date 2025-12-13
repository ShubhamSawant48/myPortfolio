const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  title: String,       // e.g., "Hackathon Winner"
  description: String, // e.g., "1st Place at Smart India Hackathon"
  icon: String,        // e.g., "🏆" (Emoji) or identifier
  color: String        // e.g., "text-yellow-400"
});

module.exports = mongoose.model('Achievement', achievementSchema);