import React, { useState } from "react";

export const LanguageContext = React.createContext({});

export const LanguageProvider = ({ children }: any) => {
  const [language, setLanguage] = useState(false);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);
