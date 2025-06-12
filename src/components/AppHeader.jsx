import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
  const navLinks = () => [
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

  <header>
    <nav>
      <ul className="d-flex justify-content-center">
        {navLinks.map((curLink, index) => (
          <li key={index} className="mx-3">
            <NavLink to={curLink.url}>{curLink.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>;
};

export default AppHeader;