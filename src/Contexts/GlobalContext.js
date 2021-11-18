import React, { useState, useEffect } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const json = await response.json();
    setData(json);
  }, []);

  return (
    <GlobalContext.Provider value={{ openFilter, setOpenFilter, data }}>
      {children}
    </GlobalContext.Provider>
  );
};