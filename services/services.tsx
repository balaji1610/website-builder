import axios from "axios";

export const authlogin = async (item: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_LOGIN_API_ENDPOINT}`,
    item
  );
  return response;
};

export const verfiyToken = async (token: any) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_PROTECTED_ENDPOINT}`,
    {
      headers: token,
    }
  );
  return response;
};

export const getItems = async (userId: any) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_GET_TEMPLATES_ENDPOINT}/${userId}`
  );
  return response;
};

export const updateItem = async (id: any, item: any) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_UPDATE_TEMPLATE_ENDPOINT}/${id}`,
    item
  );
  return response;
};

export const downlonadHTMLRequest = async (item: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_DOWNLOAD_FILE_ENDPOINT}`,
    item
  );
  return response;
};

export const createAccount = async (item: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_CREATE_ACCOUNT_ENDPOINT}`,
    item
  );
  return response;
};

export const resetPasswordRequest = async (resetUsername: string) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_RESET_PASSWORD_ENDPOINT}`,
    resetUsername
  );
  return response;
};

export const updatePasswordRequest = async (item: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_UPDATE_PASSWORD_ENDPOINT}`,
    item
  );
  return response;
};
