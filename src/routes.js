import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import Layout from "./components/Layout";
import AnimatedRoute from "./components/AnimatedRoute";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";

function Routes() {
  return (
    <Router>
      <Layout>
        <AnimatedRoute path="/" Component={Home} />
        <AnimatedRoute path="/about" Component={About} />
        <AnimatedRoute path="/contact" Component={Contact} />
      </Layout>
    </Router>
  );
}

export default Routes;
