import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";

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
