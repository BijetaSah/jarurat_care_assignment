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
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />, errorElement: <Error /> },
      { path: "/about", element: <About />, errorElement: <Error /> },
      {
        path: "/patient",
        element: <Patient />,
        loader: patientLoader,
        errorElement: <Error />,
      },
      {
        path: "/patient/:patientId",
        element: <PatientInfo />,
        loader: patientInfoLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
