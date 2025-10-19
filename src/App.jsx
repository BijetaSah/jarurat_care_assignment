import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Patient from "./Patient";
import HomeLayout from "./HomeLayout";
import { loader as patientLoader } from "./Patient";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/patient", element: <Patient />, loader: patientLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
