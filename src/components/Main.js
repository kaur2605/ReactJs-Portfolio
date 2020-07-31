import React from 'react'
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About';
import Resume from './Resume';
import Home from './Home';
import Contact from './Contact';
import Project from './Project';


export default function Main() {
 return (
  <Switch>
   <Route path="/resume" component={Resume}></Route>
   <Route path="/home" component={Home}></Route>
   <Route path="/contact" component={Contact}></Route>
   <Route path="/project" component={Project}></Route>


  </Switch>
 )
}
