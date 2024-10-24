import axios from "axios";

const API_URL = "http://localhost:5001/getTemplates";

export const getItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
