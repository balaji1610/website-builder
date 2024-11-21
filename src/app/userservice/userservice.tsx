import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

import { useApplicationContext } from "@/app/context/applicationContext";
import {
  loginRequest,
  createAccountRequest,
  resetPasswordRequest,
  updatePasswordRequest,
  downlonadFileRequest,
  protectedRequest,
  getTemplateRequest,
  updateTemplateRequest,
} from "../../../services/services";
import {
  crendentialType,
  templateType,
  resetUserIDType,
  userRecordType,
  resetUsernameType,
  userUpdatePasswordType,
} from "@/app/interface/interface";

export default function Userservice() {
  const router = useRouter();

  const {
    crendential,
    setCrendential,
    newUserCrendential,
    setnewUserCrendential,
    setResetUserID,
    selectedTemplate,
    currsentUserId,
    currentToken,
    setCurrentUserName,
    serCurrentUserId,
    setIsLoading,
    setAllTemplates,
    setUserRecord,
    setResetUsername,
    setIsActionLoading,
    setisPublishLoading,
  } = useApplicationContext();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const login = async () => {
    try {
      setIsActionLoading(true);
      const response = await loginRequest(crendential);
      if (response.status == 200) {
        toast.success(response.data.message);
        setCrendential((prev: crendentialType) => {
          return { ...prev, username: "", password: "" };
        });
        localStorage.setItem("token", response.data.token);
        await delay(2000);
        setIsActionLoading(false);
        router.push("./selecttemplate");
        return response.data;
      }
    } catch (error: any) {
      toast.error(error.response.data.message ?? "Something Went Wrong");
      setIsActionLoading(false);
      console.error(error);
    }
  };

  const protectedRoute = async () => {
    const header = { Authorization: `Bearer ${currentToken}` };

    try {
      const response = await protectedRequest(header);

      if (response.status == 200) {
        setCurrentUserName(response.data.user.username);
        serCurrentUserId(response.data.user.id);
        getTemplates(response.data.user.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTemplates = async (userID: string) => {
    try {
      const response = await getTemplateRequest(userID);

      if (response.status == 200) {
        setIsLoading(false);
        const getTemplate = response.data.map((el: userRecordType) => {
          return el.templates;
        });

        setAllTemplates(getTemplate);
        setUserRecord(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateTemplate = async (template: userRecordType) => {
    try {
      setIsActionLoading(true);
      const response = await updateTemplateRequest(currsentUserId, template);
      if (response.status == 200) {
        toast.success("Save Successfully !");
        getTemplates(currsentUserId);
        setIsActionLoading(false);
        return response.data;
      }
    } catch (error) {
      toast.error("Something went wrong");
      setIsActionLoading(false);
      console.log(error);
    }
  };

  const downloadfile = async () => {
    const { _id } = selectedTemplate as templateType;
    try {
      setisPublishLoading(true);
      const response = await downlonadFileRequest({
        id: currsentUserId,
        templateID: _id,
      });

      if (response.status == 200) {
        const { title } = selectedTemplate as templateType;
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${title}.html`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
        toast.success("Successfully Download File");
        setisPublishLoading(false);
      }
    } catch (error: any) {
      toast.error("Something went wrong");
      setisPublishLoading(false);
      console.log(error);
    }
  };

  const createAccount = async () => {
    try {
      const response = await createAccountRequest(newUserCrendential);
      if (response.status == 200) {
        toast.success("Account created successfully!");
        setnewUserCrendential((prev: crendentialType) => {
          return { ...prev, username: "", password: "" };
        });
        await delay(2000);
        router.push("./");
        return response.data;
      }
    } catch (error: any) {
      toast.error(error.response.data.message ?? "Something Went Wrong");
      console.error(error);
    }
  };

  const resetPassword = async (resetUsername: resetUsernameType) => {
    try {
      const response = await resetPasswordRequest(resetUsername);
      if (response.status == 200) {
        setResetUserID((prev: resetUserIDType) => {
          return { ...prev, _id: response.data._id };
        });
        toast.success("Successfully find your account !");
        await delay(2000);
        router.push("./updatepassword");
        return response.data;
      }
    } catch (error: any) {
      toast.error(error.response.data.message ?? "Something Went Wrong");
    }
  };

  const updateNewPassword = async (
    userUpdatePassword: userUpdatePasswordType
  ) => {
    try {
      setIsActionLoading(true);
      const response = await updatePasswordRequest(userUpdatePassword);
      if (response.status == 200) {
        toast.success(response.data.message);

        setResetUserID((prev: resetUserIDType) => {
          return { ...prev, _id: null };
        });

        setResetUsername((prev: resetUsernameType) => {
          return { ...prev, username: null };
        });
        await delay(2000);
        setIsActionLoading(false);
        router.push("./");
        return response.data.message;
      }
    } catch (error: any) {
      toast.error(error.response.data.message ?? "Something Went Wrong");
      setIsActionLoading(false);
    }
  };

  return {
    login,
    createAccount,
    resetPassword,
    updateNewPassword,
    downloadfile,
    protectedRoute,
    updateTemplate,
  };
}
