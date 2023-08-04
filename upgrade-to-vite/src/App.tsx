import { ReactElement } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./pages/nav/Nav";

export const App = (): ReactElement => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
};
