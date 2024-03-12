import { useRef } from "react";
import { useGlobalContext } from "./Context";
import sublinks from "./data";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((link) => link.pageId === pageId);

  const submenuContainer = useRef(null);
  const handleMouseLeave = (event) => {
    //setPageId(null);
    const submenu = submenuContainer.current;
    const {left,right,bottom} = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;
    if (clientX < left - 1 || clientX>right-1 || clientY >bottom-1) {
      setPageId(null);
    }
    console.log(clientX, clientY);
  };
  return (
    <div
      ref={submenuContainer}
      onMouseLeave={handleMouseLeave}
      className={currentPage ? "submenu show-submenu" : "submenu"}
    >
      <h5>{currentPage?.page}</h5>
      <div
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
        className="submenu-links"
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
