import { useGlobalContext } from "./Context";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className="nav-center">
      <h3 className="logo">Habesh</h3>
      <button className="toggle-btn">
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
