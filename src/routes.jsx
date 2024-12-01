import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects/index.jsx";

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
    element: <Projects />,
  },
]);

export default router;
