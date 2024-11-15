import axios from "axios";
import {
  crendentialType,
  userRecordType,
  resetUsernameType,
  userUpdatePasswordType,
} from "@/app/interface/interface";

export const loginRequest = async (crendential: crendentialType) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_LOGIN_API_ENDPOINT}`,
    crendential
  );
  return response;
};

export const protectedRequest = async (token: { Authorization: string }) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_PROTECTED_ENDPOINT}`,
    {
      headers: token,
    }
  );
  return response;
};

export const getTemplateRequest = async (userId: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_GET_TEMPLATES_ENDPOINT}/${userId}`
  );
  return response;
};

export const updateTemplateRequest = async (
  id: string,
  template: userRecordType
) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_UPDATE_TEMPLATE_ENDPOINT}/${id}`,
    template
  );
  return response;
};

export const downlonadFileRequest = async (download: {
  id: string;
  templateID: string;
}) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_DOWNLOAD_FILE_ENDPOINT}`,
    download
  );
  return response;
};

export const createAccountRequest = async (newUser: crendentialType) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_CREATE_ACCOUNT_ENDPOINT}`,
    newUser
  );
  return response;
};

export const resetPasswordRequest = async (
  resetUsername: resetUsernameType
) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_RESET_PASSWORD_ENDPOINT}`,
    resetUsername
  );
  return response;
};

export const updatePasswordRequest = async (
  userUpdatePassword: userUpdatePasswordType
) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_UPDATE_PASSWORD_ENDPOINT}`,
    userUpdatePassword
  );
  return response;
};
