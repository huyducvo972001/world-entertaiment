import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideMenu from "../Common/Layout/SideMenu/SideMenu";
import routes from "./Pages";

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <SideMenu />
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
