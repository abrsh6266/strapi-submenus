const { Children } = require("react");
const { createContext } = require("react");
const { useState } = require("react");

const AppContext = createContext();
export const AppProvider = ({ Children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };
  const openSideBar = () => {
    setIsSidebarOpen(true);
  };
  return (
    <AppContext.Provider value={{ isSidebarOpen, closeSideBar, openSideBar }}>
      {Children}
    </AppContext.Provider>
  );
};
