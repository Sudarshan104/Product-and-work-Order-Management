import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
  timeout: 10000
});

// Add auth token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const loginUser = (data) => API.post("/auth/login", data);
export const registerUser = (data) => API.post("/auth/register", data);

// Work Orders API
export const getWorkOrders = () => API.get("/work-orders");
export const getWorkOrderById = (id) => API.get(`/work-orders/${id}`);
export const createWorkOrder = (data) => API.post("/work-orders", data);
export const updateWorkOrderStatus = (id, status, progress = null) =>
  API.put(`/work-orders/${id}/status`, { status, progress });
export const updateWorkOrderProgress = (id, progress) =>
  API.put(`/work-orders/${id}/progress`, { progress });
export const assignWorkOrder = (id, employeeId) =>
  API.put(`/work-orders/${id}/assign`, { employeeId });
export const getWorkOrdersByEmployee = (employeeId) =>
  API.get(`/work-orders/employee/${employeeId}`);

// BOM and Materials API
export const getMaterialConsumption = (workOrderId) =>
  API.get(`/work-orders/${workOrderId}/materials`);
export const consumeMaterial = (workOrderId, materialName, quantity) =>
  API.post(`/work-orders/${workOrderId}/consume-material`, { materialName, quantity });

// Supporting Data API
export const getDepartments = () => API.get("/work-orders/data/departments");
export const getEmployees = () => API.get("/work-orders/data/employees");
export const getEmployeesByDepartment = (departmentId) =>
  API.get(`/work-orders/data/employees/department/${departmentId}`);

// Analytics API
export const getProductionStats = () => API.get("/work-orders/analytics/stats");
export const getDashboardData = () => API.get("/dashboard");

export default API;
