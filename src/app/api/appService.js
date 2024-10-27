// src/utils/apiService.ts
import envConfig from "@/config";

const API_BASE_URL = envConfig.NEXT_PUBLIC_API_ENDPOINT;

export const fetchApiData = async (endpoint, method, body, token = null, offset) => {
  let url = `${API_BASE_URL}${endpoint}`;
  
  if (offset !== undefined && offset !== null) {
    url += `?offset=${offset}`;
  }
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };
  
  const options = {
    method,
    headers,
    ...(body && { body }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, error: data.message || "Network response was not ok" };
    }
  } catch (error) {
    return { success: false, error: (error).message || "An unexpected error occurred" };
  }
};
