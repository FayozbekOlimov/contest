import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import { BASE_URL, ligaUrl } from "../api/urls";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [ligas, setLigas] = useState([]);

  const getLigas = async () => {
    const resp = await axios.get(BASE_URL + ligaUrl);
    const data = resp.data;
    setLigas(data);
  };

  useEffect(() => {
    getLigas();
  }, []);

  const value = {
    ligas,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
