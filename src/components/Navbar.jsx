import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const routes = [
  { route: "/", pageName: "Home" },
  { route: "about", pageName: "About" },
  { route: "patient", pageName: "Patient" },
];
const baseStyle = "px-2 py-1 rounded-sm transition-all ";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handelNavOpen() {
    setIsOpen((prev) => !prev);
  }
  return (
    <header className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center ">
      <div className="flex gap-4 items-center">
        <img
          src="logo.jpg"
          alt="Logo of Jarurat Care"
          className="w-10 text-xs "
        />
        <p className="text-2xl text-white hidden md:inline-block">
          {" "}
          Jarurat Care
        </p>
      </div>
      {/* mobile nav icons */}
      <button
        className="text-[2rem] md:hidden transition-transform duration-300 active:scale-90"
        onClick={handelNavOpen}
      >
        <IoMdMenu />
      </button>
      {isOpen && <MobileNav onClick={handelNavOpen} />}
      <nav className="md:flex gap-4 tracking-wider hidden ">
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

function MobileNav({ onClick }) {
  return (
    <div className="w-full absolute top-0 left-0 h-dvh">
      <nav className="flex  gap-4 tracking-wider flex-col bg-white justify-center items-center py-5 relative h-screen  ">
        <button
          className=" text-[1.5rem] transition-transform duration-300 active:scale-90 text-blue-600 absolute top-5 right-5"
          onClick={onClick}
        >
          <MdClose />
        </button>
        {routes.map((link) => (
          <NavLink
            key={link.pageName}
            onClick={onClick}
            to={link.route}
            className={({ isActive }) =>
              `${baseStyle} ${
                isActive ? "bg-blue-500 text-white" : "text-blue-600"
              }`
            }
          >
            {link.pageName}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
