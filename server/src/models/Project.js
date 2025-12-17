const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String], // Array of strings e.g. ["React", "Tailwind"]
  githubLink: String,  // URL for the "Code" button
  demoLink: String     // URL for the "Demo" button
});

module.exports = mongoose.model('Project', projectSchema);