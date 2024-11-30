import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import About from "./pages/About/index.jsx";
import Proj from "./pages/Projects/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/sobre",
    element: <About />,
  },

  {
    path: "/projetos",
    element: <Proj />,
  },
]);

export default router;
