import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Resumes from "./pages/Resumes";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resumes} />
        <Route path="/projects" component={Projects} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/courses/course-details/:id/:title" component={CourseDetails} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
