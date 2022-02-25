import Home from "../Pages/Home/Home";
import Works from "./../Pages/Works/Works";
import Teams from "./../Pages/Teams/Teams";
import Contact from "./../Pages/Contact/Contact";

const routes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/works",
    exact: false,
    element: <Works />,
  },
  {
    path: "/teams",
    exact: false,
    element: <Teams />,
  },
  {
    path: "/contact",
    exact: false,
    element: <Contact />,
  },
];

export default routes;
