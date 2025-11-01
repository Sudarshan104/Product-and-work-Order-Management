const db = require("../config/db");
const bcrypt = require("bcryptjs");

const User = {
  create: (name, email, password, role, callback) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const query = "INSERT INTO user(name, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(query, [name, email, hashedPassword, role], callback);
  },

  findByEmail: (email, callback) => {
    const query = "SELECT * FROM user WHERE email = ?";
    db.query(query, [email], callback);
  },

  findById: (id, callback) => {
    const query = "SELECT * FROM user WHERE id = ?";
    db.query(query, [id], callback);
  }
};

module.exports = User;
