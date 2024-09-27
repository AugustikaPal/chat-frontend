
import axios from 'axios';

export const queryAPI = async (text, llm_name, collection_name) => {
  try {
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Check if token exists
    if (!token) {
      throw new Error("No session ID found. User might not be logged in.");
    }

    const response = await axios.post('http://127.0.0.1:8000/query', {
      session_id: token, // Use the JWT token as session ID
      text: text,
      llm_name: llm_name,
      collection_name: collection_name
    });

    return response.data;
  } catch (error) {
    console.error("Error querying API: ", error);
    throw error;
  }
};
