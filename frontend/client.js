// client.js
// API client for Hind Browser frontend

const API_BASE_URL = "http://localhost:4000/api"; // backend ka base URL

export const apiClient = {
  // Generic GET request
  get: async (endpoint) => {
    try {
      const res = await fetch(`${API_BASE_URL}/${endpoint}`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error("GET API Error:", err);
      return { success: false, error: err.message };
    }
  },

  // Generic POST request
  post: async (endpoint, body) => {
    try {
      const res = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.error("POST API Error:", err);
      return { success: false, error: err.message };
    }
  },
};
