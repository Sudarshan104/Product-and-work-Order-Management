import React from "react";

export default function AdminDashboard() {
  const workOrders = [
    { id: 1, product: "Product A", status: "Done", department: "Assembly" },
    { id: 2, product: "Product B", status: "In Progress", department: "Packaging" },
  ];

  const summary = {
    pending: workOrders.filter((w) => w.status === "Pending").length,
    progress: workOrders.filter((w) => w.status === "In Progress").length,
    done: workOrders.filter((w) => w.status === "Done").length,
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-yellow-100 p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Pending</h3>
          <p className="text-2xl font-bold">{summary.pending}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold">In Progress</h3>
          <p className="text-2xl font-bold">{summary.progress}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Completed</h3>
          <p className="text-2xl font-bold">{summary.done}</p>
        </div>
      </div>

      {/* Work Orders Table */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">All Work Orders</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">ID</th>
              <th>Product</th>
              <th>Status</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {workOrders.map((wo) => (
              <tr key={wo.id} className="border-t">
                <td className="p-2">{wo.id}</td>
                <td>{wo.product}</td>
                <td>{wo.status}</td>
                <td>{wo.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
