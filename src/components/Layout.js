import React from "react";
import useFancyNavigationBar from "../modules/useFancyNavigationBar";
import Navigation from "./Navigation";

export default function Layout ({ children }) {
  const [hideBar] = useFancyNavigationBar()

  const navigationItems = [
    { url: '/', label: 'Home' },
    { url: '/about', label: 'About' },
    { url: '/contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen">
      <div
        className={`transition-transform duration-250 z-50 fixed top-0 flex justify-between w-full bg-black 
        opacity-80 text-white font-thin ${hideBar ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <span className="whitespace-nowrap px-8 py-4">Job van den Hoonaard</span>
        <Navigation items={navigationItems} />
      </div>
      <div className="z-0 w-screen overflow-hidden">
        {children}
      </div>
    </div>
  )
}
