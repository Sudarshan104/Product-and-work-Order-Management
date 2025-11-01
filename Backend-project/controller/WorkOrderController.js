const WorkOrder = require("../models/WorkOrder");

exports.createWorkOrder = (req, res) => {
  WorkOrder.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Work order created", id: result.insertId });
  });
};

exports.getAllWorkOrders = (req, res) => {
  WorkOrder.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

exports.updateStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  WorkOrder.updateStatus(id, status, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Status updated" });
  });
};
