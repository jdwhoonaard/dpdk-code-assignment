import React from "react";
import avatar from '../assets/avatar.png'

export default function Home () {
  return (
    <div className="w-screen">
      <div className="h-[80vh] p-24 bg-orange-600 ">
        <img src={avatar} className="rounded-full w-32 h-32 overflow-hidden object-cover" />
        <span className="font-extrabold text-white">Software Developer, <br /> Product Designer <br /> & Facilitator</span>
      </div>
    </div>
  )
}
