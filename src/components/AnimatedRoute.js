import React from "react";
import {Route} from "react-router-dom";
import {Transition} from "react-transition-group";

export default function AnimatedRoute ({ path, Component }) {
  const transitionStyles = {
    entering: "opacity-0 -translate-x-32",
    entered:  "opacity-100 translate-x-0",
    exiting:  "opacity-0 translate-x-32",
    exited:  "opacity-0 translate-x-0",
  }

  return (
    <Route exact path={path}>
      {({ match }) => (
        <Transition
          in={match != null}
          timeout={200}
          unmountOnExit
        >
          {state => (
            <div className={`absolute transition-page duration-250 ${transitionStyles[state]}`}>
              <Component />
            </div>
          )}
        </Transition>
      )}
    </Route>
  )
}
