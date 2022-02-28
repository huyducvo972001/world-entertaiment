import "./App.scss";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import ERouter from "./Components/Routers/Routes";
import Login from "./Components/Layout/Login/Login";
import { getAllProducts } from "./Components/Modules/actions/products.actions";
import { useDispatch } from "react-redux";
import { getAllEvents } from "./Components/Modules/actions/events.actions";
import { getAllBrands } from "./Components/Modules/actions/brands.actions";
import { getAllCategories } from "./Components/Modules/actions/categories.actions";
import { getAllUsers } from "./Components/Modules/actions/users.actions";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const loginHandle = () => {
    setIsLogin(true);
  };
  const logoutHandle = () => {
    setIsLogin(false);
  };

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllEvents());
    dispatch(getAllBrands());
    dispatch(getAllCategories());
    dispatch(getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLogin ? (
        <ERouter logoutHandle={logoutHandle} />
      ) : (
        <Login loginHandle={loginHandle} />
      )}
    </>
  );
}

export default App;
