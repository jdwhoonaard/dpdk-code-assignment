import React from "react";
import {Link} from "react-router-dom";

export default function Layout ({ children }) {
  return (
    <div className="w-screen">
      <div className="flex w-full gap-2 p-2">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>
      {children}
    </div>
  )
}
