const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., "React.js"
  category: String,   // e.g., "Frontend", "Backend", "Tools"
  level: String       // Optional: "Advanced", "Intermediate"
});

module.exports = mongoose.model('Skill', skillSchema);