const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/database");
require("dotenv").config(); // Load environment variables

// Import Models
const Project = require("./models/Project");
const Skill = require("./models/Skill");
const Achievement = require("./models/Achievement");
const Love = require("./models/LoveCount");
const Contact = require("./models/Contact");

const { BASE_URL } = require("./utils/constants");

const app = express();

// Middleware
app.use(cors()); // Allow your frontend to communicate with this backend
app.use(express.json()); // Allow parsing JSON data sent from frontend

// --- DATABASE CONNECTION ---
// If you have a .env file, use process.env.MONGO_URI
// Otherwise, it falls back to your local MongoDB

connectDB()
  .then(async () => {
    console.log("database connected successfully...");

    app.listen(process.env.PORT, () => {
      console.log("server established successfully...");
    });
  })
  .catch((err) => {
    console.error("error occurred while connecting db:", err.message);
    process.exit(1);
  });

// --- API ROUTES ---

// 1. PROJECTS: Fetch all projects
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Error fetching projects", error: err });
  }
});

// 2. SKILLS: Fetch all skills
app.get("/api/skills", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: "Error fetching skills", error: err });
  }
});

// 3. ACHIEVEMENTS: Fetch all achievements
app.get("/api/achievements", async (req, res) => {
  try {
    const achievements = await Achievement.find();
    res.json(achievements);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching achievements", error: err });
  }
});

// 4. LOVE COUNT: Get current count (Create if doesn't exist)
app.get("/api/love", async (req, res) => {
  try {
    let love = await Love.findOne();
    if (!love) {
      // If database is empty, start count at 0
      love = await new Love({ count: 0 }).save();
    }
    res.json(love);
  } catch (err) {
    res.status(500).json({ message: "Error fetching love count", error: err });
  }
});

// 5. LOVE COUNT: Increment count (+1)
app.post("/api/love/add", async (req, res) => {
  try {
    let love = await Love.findOne();
    if (love) {
      love.count++;
      await love.save();
    } else {
      // Logic safety: if someone clicks like before the DB is initialized
      love = await new Love({ count: 1 }).save();
    }
    res.json(love);
  } catch (err) {
    res.status(500).json({ message: "Error updating love count", error: err });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newContact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newContact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
