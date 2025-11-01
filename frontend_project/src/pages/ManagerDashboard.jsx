import React, { useState } from "react";

export default function ManagerDashboard() {
  const [workOrders, setWorkOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    product: "",
    quantity: "",
    department: "",
    operator: "",
    status: "Pending",
  });

  const handleCreate = () => {
    setWorkOrders([...workOrders, { ...newOrder, id: Date.now() }]);
    setNewOrder({ product: "", quantity: "", department: "", operator: "", status: "Pending" });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Manager Dashboard</h1>

      {/* Work Order Creation Form */}
      <div className="bg-white p-4 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Create Work Order</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            className="border p-2 rounded"
            value={newOrder.product}
            onChange={(e) => setNewOrder({ ...newOrder, product: e.target.value })}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="border p-2 rounded"
            value={newOrder.quantity}
            onChange={(e) => setNewOrder({ ...newOrder, quantity: e.target.value })}
          />
          <input
            type="text"
            placeholder="Department"
            className="border p-2 rounded"
            value={newOrder.department}
            onChange={(e) => setNewOrder({ ...newOrder, department: e.target.value })}
          />
          <input
            type="text"
            placeholder="Operator"
            className="border p-2 rounded"
            value={newOrder.operator}
            onChange={(e) => setNewOrder({ ...newOrder, operator: e.target.value })}
          />
        </div>
        <button
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={handleCreate}
        >
          + Create Work Order
        </button>
      </div>

      {/* Work Order List */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">All Work Orders</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">ID</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Department</th>
              <th>Operator</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {workOrders.map((wo) => (
              <tr key={wo.id} className="border-t">
                <td className="p-2">{wo.id}</td>
                <td>{wo.product}</td>
                <td>{wo.quantity}</td>
                <td>{wo.department}</td>
                <td>{wo.operator}</td>
                <td>{wo.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
