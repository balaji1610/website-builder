"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, usePathname } from "next/navigation";

import {
  crendentialType,
  userRecordType,
  templateType,
  resetUserIDType,
  resetUsernameType,
} from "@/app/interface/interface";

interface ApplicationContextType {
  selectedTemplate: templateType | null;
  setSelectedTemplate: Dispatch<SetStateAction<templateType | null>>;
  allTemplates: templateType[];
  setAllTemplates: Dispatch<SetStateAction<templateType[]>>;
  crendential: crendentialType;
  setCrendential: Dispatch<SetStateAction<crendentialType>>;
  currentUserName: string;
  setCurrentUserName: Dispatch<SetStateAction<string>>;
  currsentUserId: string;
  serCurrentUserId: Dispatch<SetStateAction<string>>;
  userRecord: userRecordType[];
  setUserRecord: Dispatch<SetStateAction<userRecordType[]>>;
  newUserCrendential: crendentialType;
  setnewUserCrendential: Dispatch<SetStateAction<crendentialType>>;
  resetUserID: resetUserIDType;
  setResetUserID: Dispatch<SetStateAction<resetUserIDType>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  currentToken: string | null | undefined;
  isTokenValid: boolean | null;
  setIsTokenValid: Dispatch<SetStateAction<boolean | null>>;
  resetUsername: resetUsernameType;
  setResetUsername: Dispatch<SetStateAction<resetUsernameType>>;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(
  undefined
);

interface ContextProps {
  children: ReactNode;
}

const ApplicationProvider: React.FC<ContextProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

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
  const [selectedTemplate, setSelectedTemplate] = useState<templateType | null>(
    null
  );
  const [allTemplates, setAllTemplates] = useState<templateType[]>([]);
  const [currentUserName, setCurrentUserName] = useState<string>("");
  const [currsentUserId, serCurrentUserId] = useState<string>("");

  const [userRecord, setUserRecord] = useState<userRecordType[]>([]);
  const [resetUserID, setResetUserID] = useState<resetUserIDType>({
    _id: null,
  });
  const [resetUsername, setResetUsername] = useState<resetUsernameType>({
    username: null,
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);

  let currentToken: string | null | undefined;

  if (typeof window !== "undefined") {
    currentToken = localStorage.getItem("token");
  }

  useEffect(() => {
    if (pathname == "/selecttemplate" || pathname == "/canvas") {
      if (currentToken) {
        setIsTokenValid(true);
      } else {
        setIsTokenValid(false);
      }
    }
    /* eslint-disable */
  }, [pathname]);
  return (
    <ApplicationContext.Provider
      value={{
        selectedTemplate,
        setSelectedTemplate,
        allTemplates,
        setAllTemplates,
        crendential,
        setCrendential,
        currentUserName,
        setCurrentUserName,
        currsentUserId,
        serCurrentUserId,
        userRecord,
        setUserRecord,
        newUserCrendential,
        setnewUserCrendential,
        resetUserID,
        setResetUserID,
        isLoading,
        setIsLoading,
        currentToken,
        isTokenValid,
        setIsTokenValid,
        resetUsername,
        setResetUsername,
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
