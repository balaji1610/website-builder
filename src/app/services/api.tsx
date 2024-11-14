import axios from "axios";

const API_URL = "https://grapes-js-backend.onrender.com/getTemplates";

const UPdateAPI_URL = "https://grapes-js-backend.onrender.com/updateTemplate";

const LOGINAPI_URL = "https://grapes-js-backend.onrender.com/auth/login";

const VERFIYTOKEN_API_URL = "https://grapes-js-backend.onrender.com/protected";

const CREATE_ACCOUNT_API_URL =
  "https://grapes-js-backend.onrender.com/createAccount";

const RESET_PASSWORD_API_URL =
  "https://grapes-js-backend.onrender.com/resetPassword";

const UPDATE_PASSWORD_API_URL =
  "https://grapes-js-backend.onrender.com/updatePassword";

const DOWNLOAD_HTML_FILE =
  "https://grapes-js-backend.onrender.com/downloadfile";

export const getItems = async (userId: any) => {
  const response = await axios.get(`${API_URL}/${userId}`);
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

export const verfiyToken = async (token: any) => {
  const response = await axios.get(VERFIYTOKEN_API_URL, {
    headers: token,
  });
  return response;
};

export const createAccount = async (item: any) => {
  const response = await axios.post(`${CREATE_ACCOUNT_API_URL}`, item);
  return response;
};

export const resetPasswordRequest = async (resetUsername: string) => {
  const response = await axios.post(`${RESET_PASSWORD_API_URL}`, resetUsername);
  return response;
};

export const updatePasswordRequest = async (item: any) => {
  const response = await axios.post(`${UPDATE_PASSWORD_API_URL}`, item);
  return response;
};

export const downlonadHTMLRequest = async (item: any) => {
  const response = await axios.post(`${DOWNLOAD_HTML_FILE}`, item);
  return response;
};
