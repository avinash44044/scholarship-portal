const express = require("express");
const router = express.Router();
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");
const Admin = require("../model/adminSchema");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/scholarship", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Middleware
router.use(express.json());
router.use(cors({ origin: "http://localhost:3000", credentials: true }));

router.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // should be true in production with HTTPS
  })
);

// Authentication middleware
const requireAdminLogin = (req, res, next) => {
  if (req.session.isAdminLoggedIn) {
    next();
  } else {
    res.status(401).send({ success: false, message: "Unauthorized access" });
  }
};

// Admin Login Route with Email Pattern Validation
router.post("/adminlogin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for empty fields
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Email & Password required",
      });
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      return res.status(400).send({
        success: false,
        message: "Invalid email format",
      });
    }

    // Check if admin exists
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).send({
        success: false,
        message: "Email not registered. Please Register.",
      });
    }

    // Password check (Note: You should use hashing like bcrypt in production)
    if (password !== admin.password) {
      return res.status(401).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    // Set session
    req.session.isAdminLoggedIn = true;
    req.session.admin = { email: admin.email };

    return res.status(200).send({
      success: true,
      message: "Login Successful",
      user: { email: admin.email },
    });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).send({
      success: false,
      message: `Login Error: ${err.message}`,
    });
  }
});

 router.get("/admin-auth", requireAdminLogin, (req, res) => {
  res.status(200).send({ success: true });
});

module.exports = router;
