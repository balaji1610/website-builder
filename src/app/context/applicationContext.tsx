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
  currentBlock: string;
  setCurrentBlock: Dispatch<SetStateAction<string>>;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(
  undefined
);

interface ContextProps {
  children: ReactNode;
}

const ApplicationProvider: React.FC<ContextProps> = ({ children }) => {
  const [currentBlock, setCurrentBlock] = useState<string>("");

  return (
    <ApplicationContext.Provider
      value={{
        currentBlock,
        setCurrentBlock,
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
