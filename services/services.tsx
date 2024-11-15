import axios from "axios";

export const loginRequest = async (item: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_LOGIN_API_ENDPOINT}`,
    item
  );
  return response;
};

export const protectedRequest = async (token: any) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_PROTECTED_ENDPOINT}`,
    {
      headers: token,
    }
  );
  return response;
};

export const getTemplateRequest = async (userId: any) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_GET_TEMPLATES_ENDPOINT}/${userId}`
  );
  return response;
};

export const updateTemplateRequest = async (id: any, item: any) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_UPDATE_TEMPLATE_ENDPOINT}/${id}`,
    item
  );
  return response;
};

export const downlonadFileRequest = async (item: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_DOWNLOAD_FILE_ENDPOINT}`,
    item
  );
  return response;
};

export const createAccountRequest = async (item: any) => {
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
