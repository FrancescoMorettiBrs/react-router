import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
  const navLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Chi siamo",
      url: "/chi-siamo",
    },
    {
      title: "Lista dei Post",
      url: "/lista-post",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {navLinks.map((curLink, index) => (
              <NavLink key={index} className="nav-link" to={curLink.url}>
                {curLink.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
