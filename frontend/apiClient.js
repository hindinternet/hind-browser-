// apiClient.js
// HIND Browser Frontend → Backend Connector
// Use this to call backend services from frontend

const API_BASE_URL = "https://your-backend-url.com/api"; // replace with your backend URL

// Generic GET Request
export const getRequest = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.error("GET Request Error:", error);
    return { success: false, error: error.message };
  }
};

// Generic POST Request
export const postRequest = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error("POST Request Error:", error);
    return { success: false, error: error.message };
  }
};

// Example: Connect to Health Check
export const checkBackendHealth = async () => {
  return await getRequest("health"); // hits backend route: /api/health
};

// Example: Fetch Welcome Message
export const fetchWelcomeMessage = async () => {
  return await getRequest("welcome"); // hits backend route: /api/welcome
};

// Example: Send Data to Services
export const sendDataToService = async (data) => {
  return await postRequest("service", data); // hits backend route: /api/service
};
