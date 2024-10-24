import axios from "axios";

const API_URL = "http://localhost:5001/getTemplates";

const UPdateAPI_URL = "http://localhost:5001/updateTemplate";

export const getItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const updateItem = async (id: any, item: any) => {
  const response = await axios.put(`${UPdateAPI_URL}/${id}`, item);
 
  return response.data;
};
