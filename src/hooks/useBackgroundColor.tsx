import { createContext, useContext, useState } from "react";

interface BackgroundColorContextType {
  color: string | null; // You can specify the type for color
  setColor:
    | React.Dispatch<React.SetStateAction<string | null>>
    | null;
}

const BackgroundColorContext = createContext<BackgroundColorContextType | null>(
  null
);

// create function provider
export const BackgroundColorProvider = ({ children }: any) => {
  const [color, setColor] = useState<string | null >("bg-hero-background");

  return (
    <BackgroundColorContext.Provider value={{color, setColor}}>{children}</BackgroundColorContext.Provider>
  );
};

export const useBackgroundColor = () => {
  const context = useContext(BackgroundColorContext);
    if (!context) {
    throw new Error('useBackgroundColor must be used within a BackgroundColorProvider');
  }
  return context;
};
