import React from "react";
import useFancyNavigationBar from "../modules/useFancyNavigationBar";
import {useHistory, useRouteMatch} from "react-router-dom";

export default function Layout ({ children }) {
  const [hideBar] = useFancyNavigationBar()
  const isHomePage = useRouteMatch({ path: "/", exact: true });
  const history = useHistory()

  const wrapperStyle = "whitespace-nowrap p-4"
  let Wrapper = ({ children }) => (
    <div className={wrapperStyle}>{children}</div>
  )

  if (!isHomePage) {
    Wrapper = ({ children }) => (
      <button className={wrapperStyle} onClick={() => history.push('/')}>{'< '}{children}</button>
    )
  }

  return (
    <div className="min-h-screen">
      <div
        className={`transition-transform duration-250 z-50 fixed top-0 flex w-full 
        bg-black text-white font-thin ${hideBar ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <Wrapper>Job van den Hoonaard</Wrapper>
      </div>
      <div className="z-0 w-screen overflow-hidden">
        {children}
      </div>
    </div>
  )
}
