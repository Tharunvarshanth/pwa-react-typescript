import React from "react";
import { Outlet } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      Menu
      <Outlet />
    </div>
  );
}
