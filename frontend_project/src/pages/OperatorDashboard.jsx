import React, { useState } from "react";

export default function OperatorDashboard() {
  const [orders, setOrders] = useState([
    { id: 1, product: "Product A", status: "Pending" },
    { id: 2, product: "Product B", status: "In Progress" },
  ]);

  const handleUpdate = (id, newStatus) => {
    setOrders(orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o)));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Operator Dashboard</h1>

      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">My Work Orders</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">ID</th>
              <th>Product</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="p-2">{order.id}</td>
                <td>{order.product}</td>
                <td>{order.status}</td>
                <td>
                  {order.status !== "Done" && (
                    <button
                      className="bg-blue-500 text-orange-600 px-2 py-1 rounded mr-2"
                      onClick={() =>
                        handleUpdate(
                          order.id,
                          order.status === "Pending" ? "In Progress" : "Done"
                        )
                      }
                    >
                      {order.status === "Pending" ? "Start" : "Complete"}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
