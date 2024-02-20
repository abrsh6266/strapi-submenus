import { useContext, createContext, useState } from "react";

export const AppContext = createContext();
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
export const useGlobalContext = () => {
  return useContext(AppContext);
};
