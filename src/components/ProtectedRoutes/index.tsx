import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../context/AppContextProvider"
import Home from "../../pages/Home";

export const ProtectedRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);
  return isLoggedIn ? <Outlet /> : <Home />;
};