import { createContext, useContext, ReactNode } from "react";

interface GlobalConfig {
  baseUrl?: string;
  dict: {
    staticDictMaps?: {
      [key: string]: { label: string; value: string }[];
    };
    provider: Promise<any>;
  };
}

interface GlobalConfigProviderProps {
  config: GlobalConfig;
  children: ReactNode;
}

const GlobalConfigContext = createContext<GlobalConfig | null>(null);

export const useGlobalConfig = (): GlobalConfig => {
  const context = useContext(GlobalConfigContext);

  if (!context) {
    throw new Error(
      "useGlobalConfig must be used within a GlobalConfigProvider"
    );
  }
  return context;
};

export const GlobalConfigProvider = ({
  config,
  children
}: GlobalConfigProviderProps) => {
  return (
    <GlobalConfigContext.Provider value={config}>
      {children}
    </GlobalConfigContext.Provider>
  );
};
export default GlobalConfigContext;
