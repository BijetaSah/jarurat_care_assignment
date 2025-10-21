import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Patient from "./pages/Patient";
import { loader as patientLoader } from "./pages/Patient";
import PatientInfo from "./components/PatientInfo";
import { loader as patientInfoLoader } from "./components/PatientInfo";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/patient", element: <Patient />, loader: patientLoader },
      {
        path: "/patient/:patientId",
        element: <PatientInfo />,
        loader: patientInfoLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
