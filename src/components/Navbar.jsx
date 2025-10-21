import { NavLink } from "react-router-dom";

function Navbar() {
  const routes = [
    { route: "/", pageName: "Home" },
    { route: "about", pageName: "About" },
    { route: "patient", pageName: "Patient" },
  ];
  const baseStyle = "px-2 py-1 rounded-sm transition-all ";

  return (
    <header className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <img
          src="logo.jpg"
          alt="Logo of Jarurat Care"
          className="w-10 text-xs"
        />
        <p className="text-2xl text-white"> Jarurat Care</p>
      </div>
      <nav className="flex gap-4 tracking-wider ">
        {routes.map((link) => (
          <NavLink
            key={link.pageName}
            to={link.route}
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? "bg-white text-blue-900" : ""}`
            }
          >
            {link.pageName}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
