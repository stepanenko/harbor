import { ReactElement } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./pages/nav/Nav";
import { CssBaseline } from "@mui/material";

export const App = (): ReactElement => {
  return (
    <>
      <CssBaseline />
      <Nav />
      <Outlet />
    </>
  )
};
