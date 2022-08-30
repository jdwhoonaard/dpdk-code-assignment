import React from "react";

import avatar from '../assets/avatar.png'
import rechargeMyParty from '../assets/project_rechargemyparty.png'
import sensorfact from '../assets/project_sensorfact.png'
import hivemind from '../assets/project_hivemind.png'
import {Link} from "react-router-dom";

export default function Home () {
  return (
    <div className="w-screen pt-14">
      <div className="h-[80vh] overflow-hidden bg-black text-white flex flex-col justify-center items-center gap-16 pt-16">
        <img src={avatar} className="rounded-full w-48 h-48 overflow-hidden object-cover" />
        <div className="font-extrabold text-center text-2xl md:text-4xl lg:text-6xl">Software Developer, <br /> Product Designer <br /> & Facilitator</div>
        <Link to="/about" className="hover:underline">More about me ></Link>
      </div>
      <Link
        to="/recharge-my-party"
        className="h-[80vh] overflow-hidden bg-amber-100 text-black flex flex-col md:flex-row justify-center items-center md:gap-16 pt-16"
      >
        <img src={rechargeMyParty} className="rounded-lg w-auto h-[50vh] overflow-hidden" />
        <ul className="list-none w-3/4 sm:w-1/2 py-8 md:p-0 flex flex-col gap-4">
          <li className="font-extrabold text-xl md:text-2xl lg:text-4xl">Recharge My Party</li>
          <li>A location-based AR application</li>
          <li>User Experience Design, Augmented Reality, React Native</li>
        </ul>
      </Link>
      <Link
        to="/sensorfact"
        className="h-[80vh] overflow-hidden bg-blue-600 text-white flex flex-col md:flex-row justify-center items-center md:gap-16 pt-16"
      >
        <img src={sensorfact} className="rounded-lg w-auto h-[50vh] overflow-hidden" />
        <ul className="list-none w-3/4 sm:w-1/2 py-8 md:p-0 flex flex-col gap-4">
          <li className="font-extrabold text-xl md:text-2xl lg:text-4xl">Sensorfact</li>
          <li>Creating a design system and building a new customer onboarding</li>
          <li>UI Design, ReactJS, Redux, Styled Components, Storybook</li>
        </ul>
      </Link>
      <Link
        to="/hivemind"
        className="h-[80vh] overflow-hidden bg-white text-black flex flex-col md:flex-row justify-center items-center md:gap-16 pt-16"
      >
        <img src={hivemind} className="rounded-lg w-auto h-[50vh] overflow-hidden" />
        <ul className="list-none w-3/4 sm:w-1/2 py-8 md:p-0 flex flex-col gap-4">
          <li className="font-extrabold text-xl md:text-2xl lg:text-4xl">Hivemind</li>
          <li>An experiment into playful interactions using VR goggles and Max MSP</li>
          <li>Interactive installation, Natural Interfaces, Max MSP</li>
        </ul>
      </Link>
    </div>
  )
}
