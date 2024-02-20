import { useContext } from "react";
const { createContext } = require("react");
const { useState } = require("react");

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };
  const openSideBar = () => {
    setIsSidebarOpen(true);
  };
  return (
    <AppContext.Provider value={{ isSidebarOpen, closeSideBar, openSideBar }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = useContext(AppContext);
