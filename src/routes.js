import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoute from "./components/AnimatedRoute";
import Home from "./screens/Home";
import About from "./screens/About";
import Project from "./screens/Project";

function Routes() {
  const indexTransition = {
    entering: "opacity-0 -translate-x-32",
    entered:  "opacity-100 translate-x-0",
    exiting:  "opacity-100 translate-x-0",
    exited:  "opacity-0 translate-x-0",
  }

  const pageTransition = {
    entering: "opacity-0 translate-x-32",
    entered:  "opacity-100 translate-x-0",
    exiting:  "opacity-100 translate-x-0",
    exited:  "opacity-0 translate-x-0",
  }

  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <AnimatedRoute path="/" transitionStyles={indexTransition} Component={Home} />
        <AnimatedRoute path="/about" transitionStyles={pageTransition} Component={About} />
        <AnimatedRoute path="/recharge-my-party" transitionStyles={pageTransition} Component={Project} />
        <AnimatedRoute path="/sensorfact" transitionStyles={pageTransition} Component={Project} />
        <AnimatedRoute path="/hivemind" transitionStyles={pageTransition} Component={Project} />
      </Layout>
    </Router>
  );
}

export default Routes;
