"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { crendentialType } from "@/app/interface/interface";

interface ApplicationContextType {
  currentTemplate: any;
  setCurrentTemplate: Dispatch<SetStateAction<any>>;
  block: any;
  setblock: Dispatch<SetStateAction<any>>;
  crendential: crendentialType;
  setCrendential: Dispatch<SetStateAction<crendentialType>>;
  currentUserName: string;
  setCurrentUserName: Dispatch<SetStateAction<string>>;
  currsentUserId: string;
  serCurrentUserId: Dispatch<SetStateAction<string>>;
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
  newUserCrendential: crendentialType;
  setnewUserCrendential: Dispatch<SetStateAction<crendentialType>>;
  resetUserID: any;
  setResetUserID: Dispatch<SetStateAction<any>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  currentToken: string | null | undefined;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(
  undefined
);

interface ContextProps {
  children: ReactNode;
}

const ApplicationProvider: React.FC<ContextProps> = ({ children }) => {
  const [currentTemplate, setCurrentTemplate] = useState<any>([]);
  const [block, setblock] = useState<any>([]);

  const [crendential, setCrendential] = useState<crendentialType>({
    username: "",
    password: "",
  });

  const [newUserCrendential, setnewUserCrendential] = useState<crendentialType>(
    {
      username: "",
      password: "",
    }
  );

  const [currentUserName, setCurrentUserName] = useState<string>("");
  const [currsentUserId, serCurrentUserId] = useState<string>("");

  const [user, setUser] = useState<any>([]);
  const [resetUserID, setResetUserID] = useState<any>({
    _id: null,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  let currentToken: string | null | undefined;
  if (typeof window !== "undefined") {
    currentToken = localStorage.getItem("token");
  }

  return (
    <ApplicationContext.Provider
      value={{
        currentTemplate,
        setCurrentTemplate,
        block,
        setblock,
        crendential,
        setCrendential,
        currentUserName,
        setCurrentUserName,
        currsentUserId,
        serCurrentUserId,
        user,
        setUser,
        newUserCrendential,
        setnewUserCrendential,
        resetUserID,
        setResetUserID,
        isLoading,
        setIsLoading,
        currentToken,
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
