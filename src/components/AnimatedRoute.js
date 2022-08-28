import React from "react";
import {Route} from "react-router-dom";
import {Transition} from "react-transition-group";

export default function AnimatedRoute ({ path, Component }) {
  const transitionStyles = {
    entering: "opacity-100 -left-1/4",
    entered:  "opacity-100 left-0",
    exiting:  "opacity-0 left-1/4",
    exited:  "opacity-0 left-0",
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
            <div
              className={[
                "p-2 absolute transition-page duration-500",
                transitionStyles[state]
              ].join(' ')}
            >
              <Component />
            </div>
          )}
        </Transition>
      )}
    </Route>
  )
}
