const db = require("../config/db");

exports.getStats = (req, res) => {
  const query = `
    SELECT 
      COUNT(*) AS total_orders,
      SUM(CASE WHEN status='Done' THEN 1 ELSE 0 END) AS completed,
      SUM(CASE WHEN status='Pending' THEN 1 ELSE 0 END) AS pending
    FROM work_orders
  `;
  db.query(query, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};
