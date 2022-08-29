import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import useMediaQuery from "../modules/useMediaQuery";

export default function Navigation ({ items }) {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="flex items-center">
      {isMobile && (
        <button className="p-4" onClick={() => setShowMenu(prev => !prev)}>
          {showMenu ? (
            <svg className="fill-white h-6 w-6" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/>
            </svg>
          ) : (
            <svg className="fill-white h-6 w-6" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/>
            </svg>
          )}
        </button>
      )}
      {(isMobile && !showMenu) || items.map(({ url, label }) => (
        <NavLink
          to={url}
          className="mr-4 underline-offset-8 hover:underline"
          activeClassName="underline"
          exact
        >
          {label}
        </NavLink>
      ))}
    </div>
  )
}
