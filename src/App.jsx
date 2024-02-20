import { useGlobalContext } from "./Context";
import Navbar from "./Navbar";

const App = () => {
  const {isSidebarOpen} =useGlobalContext()
  console.log(isSidebarOpen)
  return <main>
    <Navbar />
  </main>;
};
export default App;
