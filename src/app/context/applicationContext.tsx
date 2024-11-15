"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import {
  crendentialType,
  userRecordType,
  templateType,
  resetUserIDType,
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
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(
  undefined
);

interface ContextProps {
  children: ReactNode;
}

const ApplicationProvider: React.FC<ContextProps> = ({ children }) => {
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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  let currentToken: string | null | undefined;

  if (typeof window !== "undefined") {
    currentToken = localStorage.getItem("token");
  }

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
