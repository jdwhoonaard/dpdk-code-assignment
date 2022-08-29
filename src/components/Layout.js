import React from "react";
import {Link} from "react-router-dom";
import useFancyNavigationBar from "../modules/useFancyNavigationBar";

export default function Layout ({ children }) {
  const [hide] = useFancyNavigationBar()

  return (
    <div className="min-h-screen">
      <div className={[
        "transition-transform duration-250 z-50 fixed top-0 flex justify-between w-full p-4 bg-black text-white",
        `${hide ? 'translate-y-0' : '-translate-y-full'}`
      ].join(' ')}>
        <span>Job van den Hoonaard</span>
        <div className="[&>*]:ml-2">
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </div>
      </div>
      <div className="z-0">
        {children}
      </div>
    </div>
  )
}
