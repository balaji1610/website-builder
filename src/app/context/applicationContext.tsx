"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ApplicationContextType {
  currentTemplate: any;
  setCurrentTemplate: Dispatch<SetStateAction<any>>;
  block: any;
  setblock: Dispatch<SetStateAction<any>>;
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

  return (
    <ApplicationContext.Provider
      value={{
        currentTemplate,
        setCurrentTemplate,
        block,
        setblock,
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
