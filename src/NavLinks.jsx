import sublinks from "./data";

const NavLinks = () => {
  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        const { page, pageId } = link;
        return (
          <button className="nav-link" key={pageId}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
