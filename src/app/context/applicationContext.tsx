"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  authlogin,
  createAccount,
  resetPasswordRequest,
} from "@/app/services/api";
import { useRouter } from "next/navigation";

interface ApplicationContextType {
  currentTemplate: any;
  setCurrentTemplate: Dispatch<SetStateAction<any>>;
  block: any;
  setblock: Dispatch<SetStateAction<any>>;
  crendential: any;
  setCrendential: Dispatch<SetStateAction<any>>;
  login: () => void;
  prepareCreateaAccount: () => void;
  resetPassword: (resetUsername: any) => void;
  currentUserName: string;
  setCurrentUserName: Dispatch<SetStateAction<string>>;
  currsentUserId: string;
  serCurrentUserId: Dispatch<SetStateAction<string>>;
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
  newUserCrendential: any;
  setnewUserCrendential: Dispatch<SetStateAction<any>>;
  resetUserID: any;
  setResetUserID: Dispatch<SetStateAction<any>>;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(
  undefined
);

interface ContextProps {
  children: ReactNode;
}

const ApplicationProvider: React.FC<ContextProps> = ({ children }) => {
  const router = useRouter();
  const [currentTemplate, setCurrentTemplate] = useState<any>([]);
  const [block, setblock] = useState<any>([]);
  const [crendential, setCrendential] = useState<any>({
    username: "",
    password: "",
  });

  const [newUserCrendential, setnewUserCrendential] = useState<any>({
    username: "",
    password: "",
  });

  const [currentUserName, setCurrentUserName] = useState<string>("");
  const [currsentUserId, serCurrentUserId] = useState<string>("");
  const [user, setUser] = useState<any>([]);
  const [resetUserID, setResetUserID] = useState<any>();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const login = async () => {
    try {
      const response = await authlogin(crendential);
      if (response.status == 200) {
        toast.success(response.data.message);
        setCrendential((prev: any) => {
          return { ...prev, username: "", password: "" };
        });
        localStorage.setItem("token", response.data.token);
        await delay(2000);
        router.push("./selectTemplate");
        return response.data;
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };

  const prepareCreateaAccount = async () => {
    try {
      const response = await createAccount(newUserCrendential);
      if (response.status == 200) {
        toast.success("Account created successfully!");
        setnewUserCrendential((prev: any) => {
          return { ...prev, username: "", password: "" };
        });
        await delay(2000);
        router.push("./");
        return response.data;
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };

  const resetPassword = async (resetUsername: any) => {
    try {
      const response = await resetPasswordRequest(resetUsername);
      if (response.status == 200) {
        setResetUserID(response.data);
        toast.success("Successfully find your account !");
        await delay(2000);
        router.push("./updatepassword");
        return response.data;
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <ApplicationContext.Provider
      value={{
        currentTemplate,
        setCurrentTemplate,
        block,
        setblock,
        crendential,
        setCrendential,
        login,
        currentUserName,
        setCurrentUserName,
        currsentUserId,
        serCurrentUserId,
        user,
        setUser,
        newUserCrendential,
        setnewUserCrendential,
        prepareCreateaAccount,
        resetPassword,
        resetUserID,
        setResetUserID,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationProvider, ApplicationContext };

export const useApplicationContext = (): ApplicationContextType => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error(
      "useApplicationContext must be used within an ApplicationProvider"
    );
  }
  return context;
};
