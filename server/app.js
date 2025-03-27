const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// ✅ Use cookieParser
app.use(cookieParser());

// ✅ Use body-parser for handling form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Fix CORS for sessions (Allow credentials)
app.use(
  cors({
    origin: "http://localhost:3000", // Only allow requests from frontend
    credentials: true, // Allow session cookies
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Fix Express Session Configuration
app.use(
  session({
    secret: "tcet",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true }, // secure: true if using HTTPS
  })
);

// ✅ Fix MongoDB Connection (Add Options)
const db = "mongodb://localhost:27017/scholarship";
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.use(express.json());

// ✅ Import and Use Routes Correctly
app.use(require("./router/auth.js"));
app.use(require("./router/adminAuth.js"));
app.use(require("./router/scholarshipAuth.js"));
app.use(require("./router/applicationsAuth.js"));

// ✅ Middleware for Protected Routes
const requireLogin = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ success: false, message: "Login required" });
  }
  next();
};

// ✅ Start the Server
app.listen(8081, () => console.log("✅ Server running at port 8081"));
