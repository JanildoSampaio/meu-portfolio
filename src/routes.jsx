import { createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Project from "../src/pages/Projects";

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
    element: <Project />,
  },
]);

export default router;
