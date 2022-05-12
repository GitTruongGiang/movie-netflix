import React from "react";
import { Outlet } from "react-router-dom";
import Introl from "../components/Introl";
import HomeMovie from "../pages/HomeMovie";

function Layouts() {
  return (
    <>
      <Introl />
      <HomeMovie />
      <Outlet />
    </>
  );
}

export default Layouts;
