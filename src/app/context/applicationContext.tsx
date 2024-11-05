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
import { authlogin } from "@/app/services/api";
import { useRouter } from "next/navigation";

interface ApplicationContextType {
  currentTemplate: any;
  setCurrentTemplate: Dispatch<SetStateAction<any>>;
  block: any;
  setblock: Dispatch<SetStateAction<any>>;
  crendential: any;
  setCrendential: Dispatch<SetStateAction<any>>;
  login: () => void;
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
  const login = async () => {
    try {
      const response = await authlogin(crendential);
      if (response.status == 200) {
        toast.success(response.data.message);
        router.push("./selectTemplate");
        return response.data;
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error(error);
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
