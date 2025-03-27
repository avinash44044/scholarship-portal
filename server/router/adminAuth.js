const express = require("express");
const router = express.Router();
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");
const Admin = require("../model/adminSchema");

// ✅ Connect MongoDB (Ensure connection is in `server.js` if needed)
mongoose.connect("mongodb://localhost:27017/scholarship", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ Remove `const app = express();` (Handled in `server.js`)

// ✅ Fix Middleware Issue (Move to `server.js` where `app` is defined)
router.use(express.json());
router.use(cors({ origin: "http://localhost:3000", credentials: true }));

// ✅ Fix Session Middleware (Move this to `server.js`)
router.use(session({
  secret: "mysecretkey",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to `true` if using HTTPS
}));

// ✅ Middleware to check admin login
const requireAdminLogin = (req, res, next) => {
  if (req.session.isAdminLoggedIn) {
    next();
  } else {
    res.status(401).send({ success: false, message: "Unauthorized access" });
  }
};
///ankur
// ✅ Admin Login API
router.post("/adminlogin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ success: false, message: "Email & Password required" });
    }

    // ✅ Find admin in MongoDB
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).send({ success: false, message: "Email not registered. Please Register." });
    }

    // ✅ Check password (without hashing)
    if (password !== admin.password) {
      return res.status(401).send({ success: false, message: "Invalid Email or Password" });
    }

    // ✅ Fix session issue (Set session before response)
    req.session.isAdminLoggedIn = true;
    req.session.admin = { email: admin.email };

    return res.status(200).send({
      success: true,
      message: "Login Successful",
      user: { email: admin.email },
    });

  } catch (err) {
    console.error("❌ Login Error:", err);
    return res.status(500).send({ success: false, message: `Login Error: ${err.message}` });
  }
});

// ✅ Check if admin is authenticated
router.get('/admin-auth', requireAdminLogin, (req, res) => {
  res.status(200).send({ success: true });
});

module.exports = router;
