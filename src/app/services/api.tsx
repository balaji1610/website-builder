import axios from "axios";

const API_URL = "http://localhost:5001/getTemplates";

const UPdateAPI_URL = "http://localhost:5001/updateTemplate";

const LOGINAPI_URL = "http://localhost:5001/auth/login";

export const getItems = async () => {
  const response = await axios.get(API_URL);
  return response;
};

export const updateItem = async (id: any, item: any) => {
  const response = await axios.put(`${UPdateAPI_URL}/${id}`, item);
  return response;
};

export const authlogin = async (item: any) => {
  const response = await axios.post(`${LOGINAPI_URL}`, item);
  return response;
};
