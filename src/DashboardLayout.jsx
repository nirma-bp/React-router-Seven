import React from "react";
import { Outlet } from "react-router";

function DashboardLayout() {
  return (
    <div>
      <h1>DashboardLayout</h1>
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
