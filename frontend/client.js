

const API_BASE_URL = "http://localhost:3000"; // backend address

// ===========================
//       GLOBAL GET REQUEST
// ===========================

export async function apiGet(path) {
  try {
    const res = await fetch(`${API_BASE_URL}${path}`);
    return await res.json();
  } catch (err) {
    console.error("API GET Error:", err);
    return null;
  }
}


import { apiGet } from "./client.js";

async function testConnection() {
  const result = await apiGet("/health");
  console.log("Backend Response:", result);
}

testConnection();
