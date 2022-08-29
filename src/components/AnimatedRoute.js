import React from "react";
import {Route} from "react-router-dom";
import {Transition} from "react-transition-group";

export default function AnimatedRoute ({ path, Component }) {
  const transitionStyles = {
    entering: "opacity-100 translate-x-1/4",
    entered:  "opacity-100 translate-x-0",
    exiting:  "opacity-0 translate-x-1/4",
    exited:  "opacity-0 translate-x-0",
  }

  return (
    <div className="w-screen overflow-hidden">
      <Route exact path={path}>
        {({ match }) => (
          <Transition
            in={match != null}
            timeout={200}
            unmountOnExit
          >
            {state => (
              <div
                className={[
                  "absolute transition-page duration-250",
                  transitionStyles[state]
                ].join(' ')}
              >
                <Component />
              </div>
            )}
          </Transition>
        )}
      </Route>
    </div>
  )
}
