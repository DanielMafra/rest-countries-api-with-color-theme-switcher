import React, { useState } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <GlobalContext.Provider value={{ openFilter, setOpenFilter }}>
      {children}
    </GlobalContext.Provider>
  );
};