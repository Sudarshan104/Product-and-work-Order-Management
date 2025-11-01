const db = require("../config/db");

const WorkOrder = {
  create: (order, callback) => {
    const query = `
      INSERT INTO work_orders
      (product_name, department_id, assigned_to, quantity, status, deadline)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    db.query(query, [
      order.product_name,
      order.department_id,
      order.assigned_to,
      order.quantity,
      order.status || "Pending",
      order.deadline
    ], callback);
  },

  getAll: (callback) => {
    const query = "SELECT * FROM work_orders";
    db.query(query, callback);
  },

  updateStatus: (id, status, callback) => {
    const query = "UPDATE work_orders SET status = ? WHERE id = ?";
    db.query(query, [status, id], callback);
  }
};

module.exports = WorkOrder;
