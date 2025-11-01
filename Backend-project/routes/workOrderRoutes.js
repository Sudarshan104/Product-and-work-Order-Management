const express = require("express");
const router = express.Router();
const { createWorkOrder, getAllWorkOrders, updateStatus } = require("../controller/WorkOrderController");

router.post("/", createWorkOrder);
router.get("/", getAllWorkOrders);
router.put("/:id/status", updateStatus);

module.exports = router;
