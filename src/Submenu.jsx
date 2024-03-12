import { useGlobalContext } from "./Context";
import sublinks from "./data";

const Submenu = () => {
  const { pageId } = useGlobalContext();
  const currentPage = sublinks.find((link) => link.pageId === pageId);
  return (
    <div className={currentPage ? "submenu show-submenu" : "submenu"}>
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
