import React from "react";
import { NavLink, Outlet } from "react-router";

function Blog() {
  return (
    <div className="bg-gray-200 gap-9  flex ">
      <h1>hi from blog</h1>
      <NavLink to="blogone" className="font-bold">
        Blog One
      </NavLink>
      <NavLink to="blogtwo">Blog Two</NavLink>
      <NavLink to="blogthree">Blog three</NavLink>

      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Blog;
