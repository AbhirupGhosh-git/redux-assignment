import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search products" />
      </div>
      <nav>
        {/* 
        Relative Links - Does not start with a forward slash (/) and inherit the closest route in which they are rendered.
        Absolute Link - Construct the path from the root of the app and not the current URL.
        */}
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
};
