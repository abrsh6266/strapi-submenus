import { useGlobalContext } from "./Context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu} className="nav-center">
      <h3 className="logo">Habesh</h3>
      <button className="toggle-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
