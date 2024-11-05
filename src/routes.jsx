import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/sobre",
    element: <sobre />,
  },
  {
    path: "/projetos",
    element: <projetos />,
  },

    {
    path: "/contato",
    element: <contato />,
  },
]);

export default router;

