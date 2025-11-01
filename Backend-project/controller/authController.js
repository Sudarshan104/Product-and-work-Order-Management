const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const JWT_SECRET = "your_jwt_secret"; // change this in production

exports.register = (req, res) => {
  const { name, email, password, role } = req.body;
  User.create(name, email, password, role, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "User registered successfully!" });
  });
};

exports.login = (req, res) => {
  console.log("Login request body:", req.body); // <--- Add this

  const { email, password } = req.body;
  User.findByEmail(email, (err, users) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: err });
    }

    console.log("DB returned:", users); // <--- Add this

    if (!users.length) {
      console.warn("User not found for email:", email);
      return res.status(400).json({ message: "User not found" });
    }

    const user = users[0];
    const valid = bcrypt.compareSync(password, user.password);
    console.log("Password valid?", valid); // <--- Add this

    if (!valid) {
      console.warn("Invalid password for user:", email);
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });
    console.log("Login success:", user.role); // <--- Add this

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
        email: user.email
      }
    });
  });
};

