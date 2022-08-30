import React from "react";
import {Route} from "react-router-dom";
import {Transition} from "react-transition-group";

export default function AnimatedRoute ({ transitionStyles, path, Component }) {
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
