import { NavLink, Outlet } from "react-router-dom";

const routes = [
  { route: "/", pageName: "Home" },
  { route: "about", pageName: "About" },
  { route: "patient", pageName: "Patient" },
];

const baseStyle = "px-2 py-1 rounded-sm transition-all ";

function HomeLayout() {
  return (
    <div>
      {/* header navbar */}
      <header className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img src="logo.jpg" alt="Logo of Jarurat Care" className="w-10" />
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
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;
